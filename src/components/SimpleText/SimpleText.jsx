import React from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import { Fonts } from '../../shared/constants/Fonts';

export const SimpleText = ({ children, style }) => {
  return (
    <Text style={{ ...styles.text, ...style }}>{ children }</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.openSans,
    fontSize: 15
  }
});
