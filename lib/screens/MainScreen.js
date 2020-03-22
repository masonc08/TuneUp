import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MainScreenHeader, Browse, Search } from '@/components';

const MainScreen = ({token}) => {
  return (
    <View style={styles.screenStyle}>
      <View style={styles.headerContainer}>
        <MainScreenHeader/>
      </View>
      <View style={styles.pageContainer}>
        <View style={styles.browseContainer}>
          <Browse token={token}/>
        </View>
        <View style={styles.searchContainer}>
          <Search token={token}/>
        </View>
        <View style={styles.settingsContainer}>
          {/* <Settings/> */}
        </View>
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
  headerContainer: {
    flex: 2,
    overflow: 'hidden',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  pageContainer: {
    flex: 8,
  },
  browseContainer: {
    flex: 2,
  },
  searchContainer: {
    flex: 2,
  },
  settingsContainer: {
    flex: 1,
  },
});

export default MainScreen;