import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { MainScreenHeader, Browse, Search } from '@/components';

const MainScreen = ({token, setSongs}) => (
  <ScrollView style={styles.screenStyle}>
    <View style={styles.headerContainer}>
      <MainScreenHeader/>
    </View>
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
    backgroundColor: '#138a3c',
    flex: 1,
  },
  headerContainer: {
    height: 100,
    overflow: 'hidden',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  pageContainer: {
    flex: 8,
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