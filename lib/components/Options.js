import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { formatSongs } from './utils';

export default ({ songs }) => {
  const [currentSong, setCurrentSong] = useState(['A', 'B', 'C', 'D']);
  useEffect(() => {
    setCurrentSong([
      songs[songs[0].options[0]].name,
      songs[songs[0].options[1]].name,
      songs[songs[0].options[2]].name,
      songs[songs[0].options[3]].name,
      songs[0].name
    ]);
  }, []);
  const handlePress = option => {
    // if (isCorrect()) {

    // }
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