import React from 'react';
import { StyleSheet, View } from 'react-native';
import { theme } from '../../../config';

const getStyles = currentTheme => (
    StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: theme[currentTheme].container.backgroundColor,
        },
    })
);

export default ({ currentTheme, children }) => (
    <View style={getStyles(currentTheme).container}>
        {children}
    </View>
);
