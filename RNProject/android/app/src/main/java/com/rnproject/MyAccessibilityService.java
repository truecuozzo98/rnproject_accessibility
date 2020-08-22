package com.rnproject;

import android.accessibilityservice.AccessibilityService;
import android.view.accessibility.AccessibilityEvent;
import android.view.accessibility.AccessibilityNodeInfo;
import android.util.Log;

import static android.view.accessibility.AccessibilityEvent.TYPE_VIEW_ACCESSIBILITY_FOCUSED;

public class MyAccessibilityService extends AccessibilityService {

    @Override
    public void onCreate() {
        super.onCreate();
        Log.d("focusTAG", "onCreate");
    }

    @Override
    protected void onServiceConnected() {
        super.onServiceConnected();
        Log.d("focusTAG", "connected");
    }

    @Override
    public void onAccessibilityEvent(AccessibilityEvent accessibilityEvent) {
        AccessibilityNodeInfo source = accessibilityEvent.getSource();
        if (source == null) {
            return;
        }
        //Log.d("focusTAG", "accessibilityEvent: " + accessibilityEvent.toString());

        if(source.getContentDescription() != null && accessibilityEvent.getEventType() == TYPE_VIEW_ACCESSIBILITY_FOCUSED){
            AccessibilityServiceModule.prepareEvent(String.valueOf(source.getContentDescription()));
        }
        //AccessibilityServiceModule.prepareEvent(accessibilityEvent.toString());
    }

    @Override
    public void onInterrupt() {
        Log.d("focusTAG", "interrupted");
    }
}
