import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '@/resources';


export default ({ onPress, children }) => (
  <TouchableOpacity style={styles.optionContainer} onPress={onPress}>
    {children}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  optionContainer: {
    flex: 1,
    backgroundColor: COLORS.mainBlue,
    paddingHorizontal: 5,
    marginVertical: 10,
    overflow: 'hidden',
    borderRadius: 25,
    borderColor: COLORS.grey,
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }
});