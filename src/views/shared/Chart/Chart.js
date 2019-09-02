import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { theme } from '../../../config';

const getStyles = currentTheme => (
    StyleSheet.create({
        container: {
            width: '95%',
            height: '90%',
            display: 'flex',
            justifyContent: 'center',
        },
    })
);

export default ({ currentTheme }) => (
    <View style={getStyles(currentTheme).container}></View>
);
