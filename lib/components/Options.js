import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import TrackPlayerService from '@/services/trackPlayer';
import { STRINGS, COLORS } from '@/resources';
import { OptionButton } from './';


const trackPlayerService = new TrackPlayerService();

export default ({ inputSongs, setSongs }) => {
  const { shuffledSongs: songs, playlistName } = inputSongs;
  const [currentSong, setCurrentSong] = useState(['A', 'B', 'C', 'D']);
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
          onPress: trackPlayerService.playAndDisplayNext
        }
      ]
    );
  }, []);
  const handlePress = option => {
    if (currentSong[option] == currentSong[4]) {
      trackPlayerService.playAndDisplayNext();
    } else {
      Alert.alert(
        STRINGS.wrongAnswerAlertTitle,
        STRINGS.wrongAnswerAlertBody,
        [
          {
            text: STRINGS.continue,
            onPress: trackPlayerService.playAndDisplayNext
          }
        ]
      );
    }
  };
  return (
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
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: COLORS.white
  },
  optionsContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 20
  }
});