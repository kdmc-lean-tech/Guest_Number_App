import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import { SimpleText } from '../SimpleText/SimpleText';
import { Colors } from '../../shared/constants/Colors';

export const AttemptFailedItem = ({ attempt, index }) => {
  return (
    <View style={ styles.screen }>
      <SimpleText style={ styles.text }>{ attempt }</SimpleText>
      <SimpleText style={ styles.text }># { index + 1 }</SimpleText>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 15,
    width: 350,
    flexDirection: 'row-reverse',
    justifyContent: 'space-around'
  },
  text: {
    fontSize: 25,
    color: Colors.primary
  }
});
