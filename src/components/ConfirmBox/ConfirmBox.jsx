import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Colors } from '../../shared/constants/Colors';
import { NumberContainer } from '../NumberContainer/NumberContainer';

export const ConfirmBox = ({ selectedNumber, handleStartGame }) => {
  return (
    <View>
      <Text style={ styles.title }>You Selected</Text>
      <NumberContainer>
        { selectedNumber }
      </NumberContainer>
      <TouchableOpacity
        style={ styles.startButton }
        onPress={ () => handleStartGame(selectedNumber) }
      >
        <Text style={ styles.buttonText }>Start Game</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  startButton: {
    backgroundColor: Colors.accent,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20
  },
  buttonText: {
    color: Colors.white,
    textAlign: 'center'
  },
  title: {
    textAlign: 'center'
  }
});
