import React from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';
import { Fonts } from '../../shared/constants/Fonts';

export const TitleText = ({ children, style }) => {
  return (
    <Text style={{ ...styles.text, ...style }}>{ children }</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.openSansBold,
    fontSize: 20
  }
});
