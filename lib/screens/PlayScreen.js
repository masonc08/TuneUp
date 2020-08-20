import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { MainScreenHeader, Options } from '@/components';

const PlayScreen = ({ songs, setSongs }) => (
  <View style={styles.screenStyle}>
    <View style={styles.headerContainer}>
      <MainScreenHeader/>
    </View>
    <View style={styles.optionsContainer}>
      <Options songs={songs} setSongs={setSongs}/>
    </View>
  </View>
);

const styles = StyleSheet.create({
  screenStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: '#138a3c',
    flex: 1,
  },
  headerContainer: {
    height: 175,
    overflow: 'hidden',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  optionsContainer: {
    flex: 1
  },
});

export default PlayScreen;