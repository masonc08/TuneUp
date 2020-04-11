import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import TrackPlayerService from '@/services/trackPlayer';
import { STRINGS } from '@/resources';


const trackPlayerService = new TrackPlayerService();

export default ({ songs }) => {
  const [currentSong, setCurrentSong] = useState(['A', 'B', 'C', 'D']);
  useEffect(() => {
    trackPlayerService.setUp(songs, setCurrentSong);
    Alert.alert(
      STRINGS.startGameAlertTitle,
      undefined,
      [
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
            text: STRINGS.wrongAnswerAlertButton,
            onPress: trackPlayerService.playAndDisplayNext
          }
        ]
      );
    }
  };
  return (
    <View style={styles.optionsContainer}>
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={ () => handlePress(0) }
      >
        <Text style={styles.textStyle}>{currentSong[0]}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={ () => handlePress(1) }
      >
        <Text style={styles.textStyle}>{currentSong[1]}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={ () => handlePress(2) }
      >
        <Text style={styles.textStyle}>{currentSong[2]}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={ () => handlePress(3) }
      >
        <Text style={styles.textStyle}>{currentSong[3]}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    flex: 1,
    backgroundColor: 'black',
    marginVertical: 10,
    overflow: 'hidden',
    borderRadius: 25,
    borderColor: '#87562e',
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    color: 'white'
  },
  optionsContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 20
  }
});