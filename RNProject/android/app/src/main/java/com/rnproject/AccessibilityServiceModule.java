package com.rnproject;

import android.app.Activity;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.view.accessibility.AccessibilityEvent;
import android.view.accessibility.AccessibilityNodeInfo;
import android.widget.Button;
import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Arguments;

import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;

import static com.facebook.react.bridge.UiThreadUtil.runOnUiThread;

public class AccessibilityServiceModule extends ReactContextBaseJavaModule {
  private static ReactApplicationContext reactContext;

  private static final String DURATION_SHORT_KEY = "SHORT";
  private static final String DURATION_LONG_KEY = "LONG";

  AccessibilityServiceModule(ReactApplicationContext context) {
    super(context);
    reactContext = context;
  }

  @Override
  public String getName() {
    return "AccessibilityService";
  }

  @Override
  public Map<String, Object> getConstants() {
    final Map<String, Object> constants = new HashMap<>();
    constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
    constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
    return constants;
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
  public void setFocusToParentView(String id) {
    Log.d("focusTAG", "parent: " + id);
    View v = findViewByContentDescription(id);
    if (v != null) {
      View parent = (View) v.getParentForAccessibility();
      parent.sendAccessibilityEvent(AccessibilityEvent.TYPE_VIEW_FOCUSED);
    }
  }

  @ReactMethod
  public void setLabelFor(String from, String to) {
    Log.d("focusTAG", "from: " + from + "   to: " + to);
    View v1 = findViewByContentDescription(from);
    View v2 = findViewByContentDescription(to);
    Log.d("focusTAG", "v1: " + v1);
    Log.d("focusTAG", "v2: " + v2);


    if(v1 != null && v2 != null) {
      int id = View.generateViewId();
      Log.d("focusTAG", v1.toString());
      v2.setId(id);
      v1.setLabelFor(id);
    }
  }

  @ReactMethod
  public void performAction(String id) {
    Log.d("focusTAG", "action: " + id);
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
}






/*
  @ReactMethod
  public void show(String message, int duration) {
    Toast.makeText(getReactApplicationContext(), message + " !", duration).show();
    final Activity activity = getCurrentActivity();
    assert activity != null;
    show_children(activity.getWindow().getDecorView());

    View v = findViewByContentDescription("bell");
    if(v != null) {
      Log.d("focusTAG", "content desc: " + v.getContentDescription());
      View parent = (View) v.getParentForAccessibility();
      Log.d("focusTAG", "parent: " + parent.getContentDescription());
    }

    View v2 = findViewByContentDescription("name");
    if(v2 != null) {
      Log.d("focusTAG", "content desc: " + v2.getContentDescription());
      View parent = (View) v2.getParentForAccessibility();
      Log.d("focusTAG", "parent: " + parent.getContentDescription());
      v2.sendAccessibilityEvent(AccessibilityEvent.TYPE_VIEW_FOCUSED);
    }

    //findViewByContentDescription("HomeScreen");
    //findViewByContentDescription("back");


    //Log.d("focusTAG2", String.valueOf(activity.getWindow().getDecorView()));

    WritableMap params = Arguments.createMap();
    params.putString("eventProperty", "someValue");
    sendEvent(reactContext, "EventReminder", params);
  }


  private void show_children(View v) {
    ViewGroup viewgroup = (ViewGroup) v;
    for (int i=0 ; i < viewgroup.getChildCount() ; i++) {
      View v1 = viewgroup.getChildAt(i);
      if (v1 instanceof ViewGroup) {
        show_children(v1);
      }
      Log.d("focusTAG2", v1.toString());
    }
  }

  private View findViewByContentDescription(String desc) {
    //Log.d("focusTAG2", "desc: " + desc);
    final Activity activity = getCurrentActivity();
    assert activity != null;
    final View decor = activity.getWindow().getDecorView();
    ArrayList<View> results = new ArrayList<>();
    decor.findViewsWithText(results, desc, View.FIND_VIEWS_WITH_CONTENT_DESCRIPTION);
    if (results.size() == 0) {
      return null;
    }

    return results.get(0);

    Log.d("focusTAG2", "size: " + results.size());
    if(results.size() == 1) {
      //View v = (View) results.get(0);
      Log.d("focusTAG2", "size: " + results.get(0).getContentDescription());
    }

    if(results.size() == 2) {
      Log.d("focusTAG2", "size: " + results.get(0).getContentDescription());
      Log.d("focusTAG2", "size: " + results.get(1).getContentDescription());
    }

  }*/