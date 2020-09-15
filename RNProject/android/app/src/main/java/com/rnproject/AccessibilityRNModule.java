package com.rnproject;

import android.app.Activity;
import android.os.Build;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.view.accessibility.AccessibilityEvent;
import android.view.accessibility.AccessibilityNodeInfo;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.uimanager.UIManagerModule;

import static com.facebook.react.bridge.UiThreadUtil.runOnUiThread;

public class AccessibilityRNModule extends ReactContextBaseJavaModule {
  private static ReactApplicationContext reactContext;

  AccessibilityRNModule(ReactApplicationContext context) {
    super(context);
    reactContext = context;
  }

  @Override
  public String getName() {
    return "AccessibilityRN";
  }

  private static void sendEvent(ReactContext reactContext,
                                String eventName,
                                WritableMap params) {
    reactContext
        .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
        .emit(eventName, params);
  }

  @ReactMethod
  public void viewLabelFocused() {
    final Activity activity = getCurrentActivity();
    assert activity != null;
    final View rootView = activity.getWindow().getDecorView();

    rootView.setAccessibilityDelegate(new View.AccessibilityDelegate() {
      @Override
      public boolean onRequestSendAccessibilityEvent(ViewGroup viewGroup, View child, AccessibilityEvent event) {
        if (event.getEventType() == AccessibilityEvent.TYPE_VIEW_ACCESSIBILITY_FOCUSED) {
          View v = findAccessibilityFocus(rootView);
          if(v != null) {
            String label = (v.getContentDescription() == null) ? "" : (String) v.getContentDescription();
            WritableMap params = Arguments.createMap();
            params.putString("viewLabel", label);
            sendEvent(reactContext, "viewLabel", params);
          }
        }
        return super.onRequestSendAccessibilityEvent(viewGroup, child, event);
      }
    });
  }

  @ReactMethod
  public void setLabelFor(Double from, Double to) {
    if(from == null || to == null) {
      return;
    }

    final UIManagerModule uiManager = reactContext.getNativeModule(UIManagerModule.class);
    View v1 = uiManager.resolveView(from.intValue());
    View v2 = uiManager.resolveView(to.intValue());

    if(v1 == null || v2 == null) {
      return;
    }

    int id = View.generateViewId();
    v2.setId(id);
    v1.setLabelFor(id);
  }

  @ReactMethod
  public void setFocusToParentView(Double id) {
    final UIManagerModule uiManager = reactContext.getNativeModule(UIManagerModule.class);
    View v = uiManager.resolveView(id.intValue());

    if (v != null) {
      View parent = (View) v.getParentForAccessibility();
      parent.sendAccessibilityEvent(AccessibilityEvent.TYPE_VIEW_FOCUSED);
    }
  }

  @ReactMethod
  public void performAccessibilityAction(Double id) {
    final UIManagerModule uiManager = reactContext.getNativeModule(UIManagerModule.class);
    View v = uiManager.resolveView(id.intValue());

    if (v == null) {
      return;
    }

    runOnUiThread(new Runnable() {
      @Override
      public void run() {
        v.performAccessibilityAction(AccessibilityNodeInfo.ACTION_CLICK, null);
      }
    });
  }

  public static View findAccessibilityFocus(View view) {
    if (view == null) {
      return view;
    }

    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
      if (view.isAccessibilityFocused()) {
        return view;
      }
    }

    if (view instanceof ViewGroup) {
      ViewGroup viewGroup = (ViewGroup) view;
      for (int i = 0; i < viewGroup.getChildCount(); i++) {
        View childView = viewGroup.getChildAt(i);
        View result = findAccessibilityFocus(childView);

        if (result != null) {
          return result;
        }
      }
    }

    return null;
  }
}