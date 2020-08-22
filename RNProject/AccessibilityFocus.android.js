/* This work is licensed under a Creative Commons Attribution-NonCommercial 4.0 International License. */

import React from 'react';
import {requireNativeComponent, ViewPropTypes} from 'react-native';

const iface = {
  name: 'AccessibilityFocus',
  propTypes: {
    ...ViewPropTypes, // include the default view properties
  },
};

const emptyFn = (_) => _;

const RNAccessibilityFocus = requireNativeComponent(
  'AccessibilityFocus',
  iface,
);

export default class AndroidAccessibleImage extends React.Component {
  render() {
    return (
      <RNAccessibilityFocus
        style={{...this.props.style}}
        onAccessibilityFocusStart={
          this.props.onFocusStart ? this.props.onFocusStart : emptyFn
        }
        onAccessibilityFocusEnd={
          this.props.onFocusEnd ? this.props.onFocusEnd : emptyFn
        }
      >
        {this.props.children}
      </RNAccessibilityFocus>
    );
  }
}
