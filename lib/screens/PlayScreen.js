import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { MainScreenHeader, Options } from '@/components';
import { STRINGS } from '@/resources';

const PlayScreen = ({ songs, setSongs }) => {
  const backButtonAlert = () => {
    Alert.alert(
      STRINGS.returnToMenu,
      STRINGS.returnToMenuConfirm,
      [
        {
          text: STRINGS.cancel
        },
        {
          text: STRINGS.yes,
          onPress: () => setSongs(null)
        }
      ]
    )
  }
  return (
    <View style={styles.screenStyle}>
      <MainScreenHeader
        roundEdges={false}
        displayBackButton={true}
        color="white"
        backButtonOnPress={backButtonAlert}
      />
      <View style={styles.optionsContainer}>
        <Options songs={songs} setSongs={setSongs}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: '#138a3c',
    flex: 1,
  },
  optionsContainer: {
    flex: 1
  },
});

export default PlayScreen;