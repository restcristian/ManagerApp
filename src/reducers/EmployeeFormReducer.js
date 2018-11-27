import * as types from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.EMPLOYEE_UPDATE:
            const { prop, value } = action.payload;
            return {
                ...state,
                [prop]: value
            };
        default:
            return state;
    }
};