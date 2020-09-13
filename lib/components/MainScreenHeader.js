import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { STRINGS, COLORS } from '@/resources';
import { BackButton } from './';

export default class MainScreenHeader extends React.Component {
  render() {
    const {
      roundEdges,
      displayBackButton,
      color,
      backButtonOnPress
    } = this.props
    const _customStyles = {
      borderBottomRightRadius: roundEdges ? 25 : 0,
      borderBottomLeftRadius: roundEdges ? 25 : 0,
    }
    return (
      <View style={{...styles.componentWrapper, ..._customStyles}}>
        <View style={styles.iconContainer}>
          { displayBackButton ?
            <BackButton color={color} size={24} onPress={backButtonOnPress} />
            : null}
        </View>
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleTextStyle}>{STRINGS.appTitle}</Text>
        </View>
        <View style={styles.iconContainer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  componentWrapper: {
    backgroundColor: COLORS.black,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 10,
    overflow: 'hidden'
  },
  titleTextContainer: {
    flex: 8
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  titleTextStyle: {
    marginVertical: 5,
    color: COLORS.mainBlue,
    fontWeight: 'bold',
    fontSize: 48,
    alignSelf: 'center'
  },
});