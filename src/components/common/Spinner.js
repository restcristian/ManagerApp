import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Spinner = props => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={props.size || 'large'} />
        </View>
    );
};

const styles = StyleSheet.create({
    spinnerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export { Spinner };