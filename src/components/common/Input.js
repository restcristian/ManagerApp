import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const Input = props => {
    const { label, value, onChangeText, placeholder, isPassword } = props;
    const { inputStyle, labelStyle, containerStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                autoCorrect={false}
                placeholder = {placeholder}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry = {isPassword}
            />
        </View>

    );

};

const styles = StyleSheet.create({
    inputStyle: {
        color: '#000',
        paddingHorizontal: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export { Input };