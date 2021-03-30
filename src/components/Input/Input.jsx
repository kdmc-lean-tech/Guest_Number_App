import React from 'react';
import {
  StyleSheet,
  TextInput
} from 'react-native';
import { Colors } from '../../shared/constants/Colors';

export const Input = props => {
  return (
    <TextInput { ...props } style={{ ...styles.input, ...props.style }}/>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: Colors.gray,
    borderBottomWidth: 1,
    marginVertical: 10
  }
});
