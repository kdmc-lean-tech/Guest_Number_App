import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../shared/constants/Colors';

export const Header = ({ title }) => {
  return (
    <View style={ styles.header }>
      <Text style= { styles.headerTitle }>{ title }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: '15%'
  },
  headerTitle: {
    color: Colors.white,
    fontSize: 20
  }
});
