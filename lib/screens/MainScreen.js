import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MainScreenHeader } from '../components';

export default class Mainscreen extends React.Component{
    render() {
        return (
            <View style={styles.screenStyle}>
                <View style={styles.headerContainer}>
                    <MainScreenHeader/>
                </View>
                <View style={styles.pageContainer}>

                </View>
            </View>
        );
    }
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
});