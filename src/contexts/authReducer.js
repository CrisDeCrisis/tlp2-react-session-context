import { authTypes } from './authTypes.js';
import Cookies from 'js-cookie';

export const profileReducer = (state, action) => {
    switch (action.type) {
        case authTypes.LOGIN:
            const loginState = {
                ...state,
                user: action.payload,
                isAuth: true,
            };
            Cookies.set('token', JSON.stringify(loginState), { expires: 1 });
            return loginState;
        case authTypes.LOADING:
            return {
                ...state,
                isLoading: !state.isLoading
            };
        // case authTypes.SESSION:
        //     return {
        //         ...state,
        //         isAuth: true,
        //     };
        case authTypes.LOGOUT:
            const logoutState = {
                ...state,
                user: null,
                isAuth: false,
            };
            Cookies.remove('token');
            return logoutState;
        default:
            return state;
    }
};