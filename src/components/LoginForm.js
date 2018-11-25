import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import * as actions from '../actions';
import { connect } from 'react-redux';

class LoginForm extends Component {

    onEmailChange = text => {
        this.props.emailChanged(text);
    }

    onPasswordChange = text => {
        this.props.passwordChanged(text);
    }

    onButtonPress = () => {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: '#fff' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />
        }

        return (
            <Button onPress={this.onButtonPress}>
                Login
            </Button>
        );
    }



    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="examplegmail.com"
                        value={this.props.email}
                        onChangeText={this.onEmailChange}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        isPassword
                        label="Password"
                        placeholder="password"
                        value={this.props.password}
                        onChangeText={this.onPasswordChange}
                    />

                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }

}
const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
});

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };
};

export default connect(mapStateToProps, actions)(LoginForm);