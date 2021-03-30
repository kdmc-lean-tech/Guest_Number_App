import React from 'react';
import {
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Colors } from '../../shared/constants/Colors';

export const MainButton = ({ children, style, onPress }) => {
  return (
    <TouchableOpacity
        style={{ ...styles.button, ...style }}
        onPress={onPress}
      >
        { children }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,
    width: 'auto'
  }
});
