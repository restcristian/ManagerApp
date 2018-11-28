import React from 'react';
import { Text, View, Modal, StyleSheet } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = (props) => {
    return (
        <Modal
            visible = {props.visible}
            transparent
            animationType="slide"
            onRequestClose={() => {}}
        >
            <View style = {styles.containerStyle}>
                <CardSection style = {styles.cardSectionStyle}>
                    <Text style = {styles.textStyle}>{props.children}</Text>
                </CardSection>
                <CardSection>
                    <Button onPress={props.onAccept}>Yes</Button>
                    <Button onPress={props.onDecline}>No</Button>
                </CardSection>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    cardSectionStyle:{
        justifyContent:'center'
    },
    textStyle:{
        flex:1,
        fontSize:18,
        textAlign:'center',
        lineHeight:40
    },
    containerStyle:{
        backgroundColor:'rgba(0,0,0,0.75)',
        position:'relative',
        flex:1,
        justifyContent:'center'
    }
});

export { Confirm }