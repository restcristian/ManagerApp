import * as types from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: types.EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};