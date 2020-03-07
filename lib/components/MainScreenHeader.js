import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { STRINGS } from '@/resources';

export default class MainScreenHeader extends React.Component {
    render() {
        return (
            <View style={styles.componentWrapper}>
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleTextStyle: {
        color: 'white',
        fontSize: 48,
    },
});