import * as types from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux'

export const emailChanged = text => {
    return {
        type: types.EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = text => {
    return {
        type: types.PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    return dispatch => {

        dispatch({ type: types.LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSucess(dispatch, user))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSucess(dispatch, user))
                    .catch(() => loginUserFail(dispatch));
            });
    };

};
const loginUserSucess = (dispatch, user) => {
    dispatch({
        type: types.LOGIN_USER_SUCCESS,
        payload: user
    });

    Actions.main();

};

const loginUserFail = dispatch => {
    dispatch({ type: types.LOGIN_USER_FAIL });
};