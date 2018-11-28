import * as types from '../actions/types';

const INITIAL_STATE = {

};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.EMPLOYEES_FETCH_SUCCESS:
            return action.payload
        default:
            return state;
    }
}