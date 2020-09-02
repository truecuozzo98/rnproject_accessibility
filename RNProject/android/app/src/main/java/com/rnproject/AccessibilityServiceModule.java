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
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.uimanager.UIManagerModule;

import java.util.ArrayList;

import static com.facebook.react.bridge.UiThreadUtil.runOnUiThread;

public class AccessibilityServiceModule extends ReactContextBaseJavaModule {
  private static ReactApplicationContext reactContext;

  AccessibilityServiceModule(ReactApplicationContext context) {
    super(context);
    reactContext = context;
  }

  @Override
  public String getName() {
    return "AccessibilityService";
  }

  private static void sendEvent(ReactContext reactContext,
                                String eventName,
                                WritableMap params) {
    Log.d("focusTAG", "inside sendEvent");
    reactContext
        .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
        .emit(eventName, params);
  }

  public static void prepareEvent(String label) {
    WritableMap params = Arguments.createMap();
    params.putString("viewLabel", label);
    sendEvent(reactContext, "viewLabel", params);
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
          if(v != null && v.getContentDescription() != null) {
            WritableMap params = Arguments.createMap();
            params.putString("viewLabel", (String) v.getContentDescription());
            sendEvent(reactContext, "viewLabel", params);
          }
        }
        return super.onRequestSendAccessibilityEvent(viewGroup, child, event);
      }
    });
  }

  @ReactMethod
  public void setFocusToParentView(String id) {
    View v = findViewByContentDescription(id);
    if (v != null) {
      View parent = (View) v.getParentForAccessibility();
      parent.sendAccessibilityEvent(AccessibilityEvent.TYPE_VIEW_FOCUSED);
    }
  }

  @ReactMethod
  public void setLabelFor(String from, String to) {
    View v1 = findViewByContentDescription(from);
    View v2 = findViewByContentDescription(to);

    if(v1 != null && v2 != null) {
      int id = View.generateViewId();
      v2.setId(id);
      v1.setLabelFor(id);
    }
  }

  @ReactMethod
  public void performAction(String id) {
    View v = findViewByContentDescription(id);
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

  private View findViewByContentDescription(String desc) {
    final Activity activity = getCurrentActivity();
    assert activity != null;
    final View decor = activity.getWindow().getDecorView();
    ArrayList<View> results = new ArrayList<>();
    decor.findViewsWithText(results, desc, View.FIND_VIEWS_WITH_CONTENT_DESCRIPTION);
    if (results.size() == 0) {
      return null;
    }

    return results.get(0);
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
      ViewGroup viewGroup = (ViewGroup)view;
      for (int i = 0; i < viewGroup.getChildCount(); i++) {
        View childView = viewGroup.getChildAt(i);
        View result = findAccessibilityFocus(childView);
        if (result != null) return result;
      }
    }
    return null;
  }
}

