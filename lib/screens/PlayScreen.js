import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { MainScreenHeader, OptionButton, GameStatusBoard } from '@/components';
import { STRINGS, COLORS, constants } from '@/resources';


const PlayScreen = ({ songsJSON, setSongs }) => {
  const { shuffledSongs: songs, playlistName } = songsJSON;
  const [gameStarted, setGameStarted] = useState(false);
  const [currentSong, setCurrentSong] = useState(['', '', '', '']);
  const [roundNumber, setRoundNumber] = useState(0);
  const [scoreCount, setScoreCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  useEffect(() => {
    global.trackPlayer.setUp(songs, setCurrentSong);
    const interval = setInterval(async () => {
      setTimeLeft(await global.trackPlayer.getTimeLeft());
    }, 500);
    Alert.alert(
      STRINGS.startGameAlertTitle,
      STRINGS.selectedPlaylist(playlistName),
      [
        {
          text: STRINGS.pickAnotherSong,
          onPress: () => setSongs(null)
        },
        {
          text: STRINGS.startGameAlertReadyButton,
          onPress: async () => {
            await nextSong();
            global.trackPlayer.setUpListeners(nextSong);
            setGameStarted(true);
          }
        }
      ]
    );
    const onUnmount = () => {
      clearInterval(interval);
      global.trackPlayer.destroyPlayer();
    }
    return onUnmount;
  }, []);
  const backButtonAlert = () => {
    console.log(gameStarted);
    Alert.alert(
      STRINGS.returnToMenu,
      STRINGS.returnToMenuConfirm,
      [
        {
          text: STRINGS.cancel
        },
        {
          text: STRINGS.yes,
          onPress: () => setSongs(null)
        }
      ]
    )
  };
  const handlePress = async option => {
    if (currentSong[option] == currentSong[4]) {
      // if correct answer
      setScoreCount(scoreCount => scoreCount + 1);
      await nextSong();
    } else {
      // if incorrect
      Alert.alert(
        STRINGS.wrongAnswerAlertTitle,
        STRINGS.wrongAnswerAlertBody,
        [
          {
            text: STRINGS.continue,
            onPress: async () => await nextSong()
          }
        ]
      );
    }
  };
  const nextSong = async () => {
    if (roundNumber == constants.MAX_ROUNDS) {
      setGameStarted(false);
      global.trackPlayer.stop();
      Alert.alert(
        STRINGS.gameOver,
        STRINGS.yourScoreWas(scoreCount),
        [{
          text: STRINGS.returnToMenu,
          onPress: () => setSongs(null)
        }]
      );
    } else {
      setRoundNumber(roundNumber => roundNumber + 1);
      await global.trackPlayer.playAndDisplayNext();
    }
  }
  return (
    <View style={styles.screenStyle}>
      <MainScreenHeader
        roundEdges={false}
        displayBackButton={true}
        color={COLORS.white}
        backButtonOnPress={backButtonAlert}
      />
      <GameStatusBoard
        roundNumber={roundNumber}
        scoreCount={scoreCount}
        timeLeft={timeLeft}
      />
        <View style={styles.optionsContainer}>
          <OptionButton onPress={() => handlePress(0)}>
            <Text style={styles.textStyle}>{currentSong[0]}</Text>
          </OptionButton>
          <OptionButton onPress={() => handlePress(1)}>
            <Text style={styles.textStyle}>{currentSong[1]}</Text>
          </OptionButton>
          <OptionButton onPress={() => handlePress(2)}>
            <Text style={styles.textStyle}>{currentSong[2]}</Text>
          </OptionButton>
          <OptionButton onPress={ () => handlePress(3)}>
            <Text style={styles.textStyle}>{currentSong[3]}</Text>
          </OptionButton>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.spotifyLightGreen,
    flex: 1,
  },
  textStyle: {
    color: COLORS.white
  },
  optionsContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 20
  }
});

export default PlayScreen;