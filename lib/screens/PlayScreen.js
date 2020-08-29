import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { MainScreenHeader, Options, GameStatusBoard } from '@/components';
import { STRINGS, COLORS } from '@/resources';

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
        color={COLORS.white}
        backButtonOnPress={backButtonAlert}
      />
      <GameStatusBoard/>
      <View style={styles.optionsContainer}>
        <Options inputSongs={songs} setSongs={setSongs}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.spotifyLightGreen,
    flex: 1,
  },
  optionsContainer: {
    flex: 1
  },
});

export default PlayScreen;