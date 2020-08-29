import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import TrackPlayerService from '@/services/trackPlayer';
import { MainScreenHeader, OptionButton, GameStatusBoard } from '@/components';
import { STRINGS, COLORS } from '@/resources';


const trackPlayerService = new TrackPlayerService();

const PlayScreen = ({ songsJSON, setSongs }) => {
  const { shuffledSongs: songs, playlistName } = songsJSON;
  const [currentSong, setCurrentSong] = useState(['', '', '', '']);
  const [roundNumber, setRoundNumber] = useState(0);
  const [scoreCount, setScoreCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  let timer = useRef(null);
  useEffect(() => {
    trackPlayerService.setUp(songs, setCurrentSong);
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
          onPress: nextSong
        }
      ]
    );
  }, []);
  const backButtonAlert = () => {
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
  const handlePress = option => {
    if (currentSong[option] == currentSong[4]) {
      // if correct answer
      setScoreCount(scoreCount => scoreCount + 1);
      nextSong();
    } else {
      // if incorrect
      Alert.alert(
        STRINGS.wrongAnswerAlertTitle,
        STRINGS.wrongAnswerAlertBody,
        [
          {
            text: STRINGS.continue,
            onPress: nextSong
          }
        ]
      );
    }
  };
  const nextSong = () => {
    trackPlayerService.playAndDisplayNext();
    setRoundNumber(roundNumber => roundNumber + 1);
    setTimeLeft(30);
    timer.current = setInterval(countdown, 1000);
  }
  const countdown = () => setTimeLeft(timeLeft => timeLeft - 1);
  if (timeLeft == -1) {
    clearInterval(timer.current);
    nextSong();
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