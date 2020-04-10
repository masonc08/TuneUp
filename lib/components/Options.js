import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { formatSongs } from './utils';

export default ({ songs }) => {
  const [allSongs, setAllSongs] = useState();
  const [currentSong, setCurrentSong] = useState();
  useEffect(() => {
    setAllSongs(formatSongs(songs));
  }, []);
  const handlePress = option => {
    console.log(option);
  };
  return (
    <View style={styles.optionsContainer}>
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={ () => handlePress(0) }
      >
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={ () => handlePress(1) }
      >
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={ () => handlePress(2) }
      >
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={ () => handlePress(3) }
      >
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
    borderWidth: 5
  },
  optionsContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 20,
  }
});