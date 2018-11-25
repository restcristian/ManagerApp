import * as types from './types';
import firebase from 'firebase';

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

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSucess(dispatch, user))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSucess(dispatch, user))
                    .catch(()=> loginUserFail(dispatch));
            });
    };

};
const loginUserSucess = (dispatch, user) => {
    dispatch({
        type: types.LOGIN_USER_SUCCESS,
        payload: user
    });

};

const loginUserFail = dispatch => {
    dispatch({ type: types.LOGIN_USER_FAIL });
};