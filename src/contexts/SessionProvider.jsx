import { createContext, useContext, useReducer } from "react";
import { login, session, logout } from '../hooks/useSession.js';
import { profileReducer } from "./profileReducer";
import { authTypes } from "./profileTypes";


const authContext = createContext();

export const SessionProvider = () => {

    const initialState = {
        user: null,
        token: null,
        error: null,
        loading: false
    }

    const [state, dispatch] = useReducer(profileReducer, initialState);

    const userLogin = async (email, password) => {
        try {
            const response = await login(email, password);
            if (response.ok) {
                dispatch({
                    type: authTypes.LOGIN,
                    payload: response.data
                });
            }
            return response;
        } catch (error) {
            dispatch({
                type: authTypes.LOGIN,
                payload: error
            });
            return error;
        }
    }


    const userSession = async () => {
        try {
            const response = await session();
            if (response.ok) {
                dispatch({
                    type: authTypes.SET_LOADING,
                    payload: response.data
                });
            }
            return response;
        } catch (error) {
            dispatch({
                type: authTypes.SET_LOADING,
                payload: error
            });
            return error;
        }
    }

    const userLogout = async () => {
        try {
            const response = await logout();
            if (response.ok) {
                dispatch({
                    type: authTypes.LOGOUT
                });
            }
            return response;
        } catch (error) {
            dispatch({
                type: authTypes.LOGOUT,
                payload: error
            });
            return error;
        }
    }

    return (
        <authContext.Provider value={{ state, userLogin, userSession, userLogout }}>
            {children}
        </authContext.Provider>
    )
}

export const useAuth = () => useContext(authContext);