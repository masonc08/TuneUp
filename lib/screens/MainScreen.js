import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { MainScreenHeader, Browse, Search } from '@/components';
import { COLORS } from '@/resources';

const MainScreen = ({token, setSongs}) => (
  <ScrollView style={styles.screenStyle}>
    <MainScreenHeader/>
    <View style={styles.pageContainer}>
      <View style={styles.browseContainer}>
        <Browse token={token} setSongs={setSongs}/>
      </View>
      <View style={styles.searchContainer}>
        <Search token={token} setSongs={setSongs}/>
      </View>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  screenStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.black,
    flex: 1,
  },
  pageContainer: {
    paddingHorizontal: 5,
    paddingBottom: 5
  },
  browseContainer: {
  },
  settingsContainer: {
    flex: 1,
  },
});

export default MainScreen;