import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { STRINGS } from '@/resources';
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
        <View style={styles.menuBarContainer}>
          { displayBackButton ?
            <BackButton color={color} size={24} onPress={backButtonOnPress} />
            : null}
        </View>
        <Text style={styles.titleTextStyle}>{STRINGS.appTitle}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  componentWrapper: {
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    paddingHorizontal: 5,
    overflow: 'hidden',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  menuBarContainer: {
    flexDirection: 'row',
    width: '100%'
  },
  titleTextStyle: {
    color: 'white',
    fontSize: 48,
  },
});