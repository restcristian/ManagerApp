import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { View, Text } from 'react-native';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';

class App extends Component {

    componentDidMount() {
        const config = {
            apiKey: "AIzaSyAe5DsWclasT_zUdG-ji3rh1ApX_Qo6VjE",
            authDomain: "manager-ec41f.firebaseapp.com",
            databaseURL: "https://manager-ec41f.firebaseio.com",
            projectId: "manager-ec41f",
            storageBucket: "manager-ec41f.appspot.com",
            messagingSenderId: "301353499140"
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <View>
                    <LoginForm />
                </View>
            </Provider>
        );
    }

}

export default App;