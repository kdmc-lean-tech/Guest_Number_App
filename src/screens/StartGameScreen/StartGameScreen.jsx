import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableNativeFeedback,
  Keyboard,
  Alert,
  Image
} from 'react-native';
import { Card } from '../../components/Card/Card';
import { Input } from '../../components/Input/Input';
import { Colors } from '../../shared/constants/Colors';
import { ConfirmBox } from '../../components/ConfirmBox/ConfirmBox';
import { SimpleText } from '../../components/SimpleText/SimpleText';
import { TitleText } from '../../components/TitleText/TitleText';
import { MainButton } from '../../components/MainButton/MainButton';

export const StartGameScreen = ({ handleStartGame }) => {

  const [ value, setValue ] = useState('');
  const [ confirm, setConfirm ] = useState(false);
  const [ selectedNumber, setSelectedNumber ] = useState();

  const handleOnChange = (textValue) => {
    setValue(textValue.replace(/[^0-9]/g, ''));
  }

  const handleResetValue = () => {
    setValue('');
    setConfirm(false);
    setSelectedNumber();
  }

  const handleConfirmValue = () => {
    const chosenNumber = parseInt(value);
    if (
      isNaN(chosenNumber) ||
      chosenNumber <= 0 ||
      chosenNumber > 99  
    ) {
      Alert.alert(
        'Invalid number !!',
        'Only numeric values can be entered.',
        [
          {
            text: 'Ok',
            style: 'destructive',
            onPress: handleResetValue
          }
        ]
      );
      return;
    }
    setConfirm(true);
    setValue('');
    setSelectedNumber(chosenNumber);
  }

  return (
    <TouchableNativeFeedback onPress={
      () => Keyboard.dismiss()
    }>
      <View style={ styles.screen }>
        <TitleText style={ styles.title }>Start a New Game !!</TitleText>
        <Card style={ styles.card }>
          <SimpleText style={ styles.subtitle }>Select a Number</SimpleText>
          <View style={ styles.inputContainer }>
            <Input
              style={ styles.input }
              blurOnSubmit
              autoCapitalize='none'
              autoCorrect={ false }
              keyboardType='numeric'
              maxLength={ 2 }
              onChangeText={ handleOnChange }
              value={ value }
            />
          </View>
          <View style={ styles.buttonsGroup }>
            <MainButton
              style={ styles.resetbutton }
              onPress={ handleResetValue }
            >
              <SimpleText style={ styles.buttonText }>Reset</SimpleText>
            </MainButton>
            <MainButton
              style={ styles.confirmButton }
              onPress={ handleConfirmValue }
            >
              <SimpleText style={ styles.buttonText }>Confirm</SimpleText>
            </MainButton>
          </View>
        </Card>
        { confirm &&
          <ConfirmBox
            selectedNumber={ selectedNumber }
            handleStartGame={ handleStartGame }
          />
        }
        {
          !confirm &&
          <View style={ styles.imageContainer }>
            <Image
              source={{ uri: 'https://honeysanime.com/wp-content/uploads/2018/04/Kizuna-Ai-Wallpaper-300x424.jpg' }}
              style={ styles.image }
              />
          </View>
        }
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 10,
    height: '100%'
  },
  card: {
    margin: 20
  },
  title: {
    textAlign: 'center',
    margin: 10,
  },
  input: {
    fontSize: 20,
    width: 25
  },
  subtitle: {
    textAlign: 'center',
    margin: 10
  },
  buttonsGroup: {
    flexDirection: 'row',
    marginTop: 10
  },
  resetbutton: {
    backgroundColor: Colors.accent,
    flex: 1,
    marginRight: 5,
    padding: 10,
  },
  confirmButton: {
    flex: 1,
    marginLeft: 5,
    padding: 10,
  },
  buttonText: {
    color: Colors.white,
    textAlign: 'center'
  },
  inputContainer: {
    alignItems: 'center'
  },
  confirmText: {
    textAlign: 'center'
  },
  image: {
    width: '90%',
    height: '65%',
    borderRadius: 10
  },
  imageContainer: {
    alignItems: 'center'
  }
});
