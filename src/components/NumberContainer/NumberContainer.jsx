import React from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';
import { Card } from '../Card/Card';
import { Colors } from '../../shared/constants/Colors';

export const NumberContainer = ({ children, style }) => {
  return (
    <Card style={{ ...styles.numberContainer, ...style }}>
      <Text style={ styles.numberText }>{ children }</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  numberContainer: {
    margin: 20,
    padding: 25,
    backgroundColor: Colors.primary
  },
  numberText: {
    color: Colors.white,
    fontSize: 25,
    textAlign: 'center'
  }
});
