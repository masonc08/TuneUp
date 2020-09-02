import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { CounterDisplay } from '@/components';
import { COLORS } from '@/resources';


export default ({ roundNumber, scoreCount, timeLeft }) => {
  return (
    <View style={styles.wrapperContainer}>
      <CounterDisplay displayText="Round" value={roundNumber} />
      <CounterDisplay displayText="Score" value={scoreCount} />
      <CounterDisplay displayText="Time Remaining" value={timeLeft} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperContainer: {
    width: '100%',
    backgroundColor: COLORS.black,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between'
  },
  textStyle: {
    color: COLORS.white
  }
});