import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  View,
  Alert,
  Image
} from 'react-native';
import {
  generateRandomNumbers
} from '../../helpers/generateRandomNumbers/generateRandomNumbers';
import { NumberContainer } from '../../components/NumberContainer/NumberContainer';
import { Card } from '../../components/Card/Card';
import { Colors } from '../../shared/constants/Colors';
import { SimpleText } from '../../components/SimpleText/SimpleText';
import { TitleText } from '../../components/TitleText/TitleText';
import { MainButton } from '../../components/MainButton/MainButton';
import { Ionicons } from '@expo/vector-icons';

export const GameScreen = ({ selectedNumber, handleGameOver, handleSetAttempsFailed  }) => {

  const [
    currentGuess,
    setCurrentGuess
  ] =useState(generateRandomNumbers(1, 100, selectedNumber));
  const [ rounds, setRounds ] = useState(0);
  const currentHigh = useRef(100);
  const currentLower = useRef(1);
  const warningImage = 'https://besthqwallpapers.com/Uploads/15-1-2018/37317/thumb2-kizuna-ai-art-cry-anime-characters.jpg';
  const successImage = 'https://assets.puzzlefactory.pl/puzzle/319/004/original.jpg';
  const [ image, setImage ] = useState(successImage);

  useEffect(() => {
    if (currentGuess === selectedNumber) {
      handleGameOver(rounds);
    }
  }, [ currentGuess ]);

  const handleNextGuess = (direction) => {
    if (
      (direction === 'lower' && currentGuess < selectedNumber) ||
      (direction === 'greater' && currentGuess > selectedNumber)
    ) {
      Alert.alert('Don´t lie!', 'You know that this is wrong...',
        [
          { text: 'Sorry!!', style: 'cancel' }
        ]
      );
      setImage(warningImage);
      return;
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLower.current = currentGuess;
    }
    const nextValue = generateRandomNumbers(currentLower.current, currentHigh.current, currentGuess);
    setCurrentGuess(nextValue);
    setRounds(currentRounds => currentRounds + 1);
    if (image === warningImage) {
      setImage(successImage);
    }
    handleSetAttempsFailed(nextValue);
  }

  return (
    <View>
      <TitleText style={ styles.title }>Opponent's Guess</TitleText>
      <NumberContainer>
        { currentGuess }
      </NumberContainer>
      <Card style={ styles.card }>
        <MainButton
            style={ styles.buttonLower }
            onPress={ () => handleNextGuess('lower') }
          >
          <SimpleText style={ styles.buttonText }>
            <Ionicons
              name='md-remove'
              size={ 24 }
              color={ Colors.white }
            />
          </SimpleText>
        </MainButton>
        <MainButton
          style={ styles.buttonGreater }
          onPress={ () => handleNextGuess('greater') }
        >
          <SimpleText style={ styles.buttonText }>
            <Ionicons
              name='md-add'
              size={ 24 }
              color={ Colors.white }
            />
          </SimpleText>
        </MainButton>
      </Card>
      <View style={ styles.imageContainer }>
        <Image
          source={{ uri: image }}
          style={ styles.image }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginTop: 10
  },
  card: {
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonLower: {
    backgroundColor: Colors.accent,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20
  },
  buttonGreater: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20
  },
  buttonText: {
    color: Colors.white
  },
  image: {
    width: '90%',
    height: '55%',
    borderRadius: 10
  },
  imageContainer: {
    alignItems: 'center'
  }
});
