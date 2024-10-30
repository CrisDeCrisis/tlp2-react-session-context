import { authTypes } from './profileTypes.js';

export const profileReducer = (state, action) => {
    switch (action.type) {
        case authTypes.LOGIN:
            return {
                ...state,
                user: action.payload,
                isAuth: true,
                isLoading: false,
            };
        case authTypes.LOGOUT:
            return {
                ...state,
                user: null,
                isAuth: false,
                isLoading: false,
            };
        case authTypes.SET_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        default:
            return state;
    }
};