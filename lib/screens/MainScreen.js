import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MainScreenHeader, Browse } from '@/components';

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
                    {/* <Search/> */}
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
        backgroundColor: '#1DB954',
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
        margin: 10,
        flex: 2,
    },
    searchContainer: {
        margin: 10,
        flex: 2,
    },
    settingsContainer: {
        margin: 10,
        flex: 1,
    },
});

export default MainScreen;