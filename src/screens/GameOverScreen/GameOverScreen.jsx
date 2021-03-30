import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';
import { Colors } from '../../shared/constants/Colors';
import { TitleText } from '../../components/TitleText/TitleText';
import { SimpleText } from '../../components/SimpleText/SimpleText';
import { MainButton } from '../../components/MainButton/MainButton';
import { AttemptFailedItem } from '../../components/AttemptFailedItem/AttemptFaliedItem';

export const GameOverScreen = ({ attempts, userNumber, handleResetGame, attemptsFailedList }) => {
  return (
    <View style={ styles.screen }>
      <TitleText style={ styles.title }>The Game is Over !!</TitleText>
      <Image
        source={ { uri: 'https://wallpaperaccess.com/full/3095697.jpg' } }
        style={ styles.image }
        resizeMode='contain'
      />
      <SimpleText style={ styles.message }>
          Number of rounds is { attempts }, and of number was { userNumber }
      </SimpleText>
      <ScrollView>
        {
          attemptsFailedList.map((attempt, idx) =>
            <AttemptFailedItem
              key={ idx }
              attempt={ attempt }
              index={ idx }
            />)
        }
      </ScrollView>
      <MainButton
          onPress={ handleResetGame }
          style={ styles.button }>
            <SimpleText style={ styles.buttonText }>New Game</SimpleText>
      </MainButton>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  button: {
    marginTop: 10,
    width: '30%',
    marginBottom: 20,
    backgroundColor: Colors.accent
  },
  buttonText: {
    color: Colors.white
  },
  image: {
    width: '90%',
    height: '30%',
    borderRadius: 500/ 2
  },
  title: {
    margin: 15
  },
  message: {
    color: Colors.accent,
    marginTop: 10,
    fontSize: 15,
    textAlign: 'center'
  },
  itemList: {
    fontSize: 30,
    width: 150,
  }
});
