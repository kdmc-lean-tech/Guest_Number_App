import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { StyleSheet, View } from 'react-native';
import { Header } from './src/components/Header/Header';
import { StartGameScreen } from './src/screens/StartGameScreen/StartGameScreen';
import { GameScreen } from './src/screens/GameScreen/GameScreen';
import { GameOverScreen } from './src/screens/GameOverScreen/GameOverScreen';

const fetchFonts = () => {
  return Font.loadAsync({
   "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
   "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  });
};

export default function App() {

  const [ userNumber, setUserNumber ] = useState();
  const [ attempts, setAttempts ] = useState(0);
  const [ fontsLoaded, setFontsLoaded ] = useState(false);
  const [ attemptsFailedList, setAttemptsFailedList ] = useState([]);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={ fetchFonts }
        onFinish={ () => setFontsLoaded(true) }
        onError={(err) => console.log(err)}
      />
    );
  }

  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  const handleGameOver = (numAttempts) => {
    setAttempts(numAttempts);
  }

  const handleResetGame = () => {
    setUserNumber();
    setAttempts(0);
    setAttemptsFailedList([]);
  }

  const handleSetAttempsFailed = (attemptFailed) => {
    setAttemptsFailedList(list => [...list, attemptFailed]);
  }

  let content = <StartGameScreen handleStartGame={ handleStartGame }/>;

  if (userNumber && attempts <= 0) {
    content =
      <GameScreen
        selectedNumber={ userNumber }
        handleGameOver={ handleGameOver }
        handleSetAttempsFailed= { handleSetAttempsFailed }/>;
  } else if (attempts > 0) {
    content =
      <GameOverScreen
        attempts={ attempts }
        userNumber={ userNumber }
        handleResetGame={ handleResetGame }
        attemptsFailedList={ attemptsFailedList }
      />
  }

  return (
    <View style={styles.screen}>
      <Header title='Guest Number App' />
      { content }
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
});
