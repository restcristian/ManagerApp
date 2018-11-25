import React from 'react';
import { Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = props => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={styles.buttonStyle}>
            <Text style={styles.textStyle}>{props.children}</Text>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        flex:1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginHorizontal: 5,
        paddingVertical: 10,
        alignItems:'center'
       
    },
    textStyle: {
        // alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
       
    }
});
export {Button};