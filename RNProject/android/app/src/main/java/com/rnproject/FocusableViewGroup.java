package com.everywarelab.screenreaderapirn;

import android.os.Build;
import android.widget.LinearLayout;
import android.view.View;
import android.view.ViewGroup;
import android.view.View.AccessibilityDelegate;
import android.view.accessibility.AccessibilityEvent;

import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Arguments;


public class FocusableViewGroup extends LinearLayout {
    public FocusableViewGroup(ThemedReactContext context) {
        super(context);
        installAccessibilityDelegate();
    }

    public void installAccessibilityDelegate() {
        setAccessibilityDelegate(new AccessibilityDelegate() {
            @Override
            public boolean onRequestSendAccessibilityEvent(ViewGroup viewGroup, View child, AccessibilityEvent event) {
                if (event.getEventType() == AccessibilityEvent.TYPE_VIEW_ACCESSIBILITY_FOCUSED) {
                    sendReactNativeEvent("start");
                    return false;
                }

                if (event.getEventType() == AccessibilityEvent.TYPE_VIEW_ACCESSIBILITY_FOCUS_CLEARED) {
                    sendReactNativeEvent("end");
                    return false;
                }

                return super.onRequestSendAccessibilityEvent(viewGroup, child, event);
            }
        });
    }

    private void sendReactNativeEvent(String type) {
        WritableMap event = Arguments.createMap();
        ReactContext reactContext = (ReactContext) getContext();
        reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                getId(),
                "native_accessibility_focus_" + type,
                event
        );
    }
}
