package com.rnproject;

import java.util.Map;

import android.widget.LinearLayout;

import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.common.MapBuilder;

public class ScreenReaderFocusViewManager extends ViewGroupManager<FocusableViewGroup> {
    public static final String REACT_CLASS = "AccessibilityFocus";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected FocusableViewGroup createViewInstance(ThemedReactContext reactContext) {
        return new FocusableViewGroup(reactContext);
    }

    public Map getExportedCustomBubblingEventTypeConstants() {
        return MapBuilder.builder()
                .put(
                        "native_accessibility_focus_start",
                        MapBuilder.of(
                                "phasedRegistrationNames",
                                MapBuilder.of("bubbled", "onAccessibilityFocusStart")))
                .put(
                        "native_accessibility_focus_end",
                        MapBuilder.of(
                                "phasedRegistrationNames",
                                MapBuilder.of("bubbled", "onAccessibilityFocusEnd"))).build();
    }
}
