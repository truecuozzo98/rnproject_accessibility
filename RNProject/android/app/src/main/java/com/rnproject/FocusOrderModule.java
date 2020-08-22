package com.rnproject;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.uimanager.UIManagerModule;

import android.util.Log;
import android.view.View;

import java.util.Map;
import java.util.HashMap;
import java.util.ArrayList;

public class FocusOrderModule extends ReactContextBaseJavaModule {
  private static ReactApplicationContext reactContext;

  FocusOrderModule(ReactApplicationContext context) {
    super(context);
    reactContext = context;
  }

  @Override
  public String getName() {
    return "FocusOrder";
  }

  @ReactMethod
  public void setOrder(ReadableArray order) {
    Log.w("ACCESSIBILITY_FOCUS", "here");
    final UIManagerModule uiManager = this.reactContext.getNativeModule(UIManagerModule.class);
    ArrayList<View> viewList = new ArrayList<View>();

    for (Object el : order.toArrayList()) {
        viewList.add(uiManager.resolveView((int) ((double) el)));
    }

    for (int i = 0; i < viewList.size(); i++) {
      if (i > 0) {
        View current = viewList.get(i);
        View prev = viewList.get(i - 1);
        current.setAccessibilityTraversalAfter(prev.getId());
      }
    }
  }
}
