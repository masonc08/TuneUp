import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Mainscreen extends React.Component{
    render() {
        return (
            <View style={styles.screenStyle}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screenStyle: {
        width: '100%',
        height: '100%',
        backgroundColor: '#1DB954',
    },
});