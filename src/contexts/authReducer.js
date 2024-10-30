import { authTypes } from './authTypes.js';

export const profileReducer = (state, action) => {
    switch (action.type) {
        case authTypes.LOGIN:
            return {
                ...state,
                user: action.payload,
                isAuth: true,
            };
        case authTypes.LOGOUT:
            return {
                ...state,
                user: null,
                isAuth: false,
            };
        default:
            return state;
    }
};