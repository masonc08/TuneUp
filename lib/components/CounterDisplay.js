import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { COLORS } from '@/resources';


export default ({ displayText, value }) => (
  <Text style={styles.textStyle}>
    {`${displayText}: ${value}`}
  </Text>
)

const styles = StyleSheet.create({
  textStyle: {
    color: COLORS.white
  }
});