import { createContext, useContext, useReducer } from "react";
import { login, logout } from '../hooks/useSession.js';
import { profileReducer } from "./authReducer.js";
import { authTypes } from "./authTypes.js";


const authContext = createContext();

export const SessionProvider = ({ children }) => {
    const initialState = {
        user: null,
        isAuth: null,
        error: null,
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
        <authContext.Provider value={{ state, userLogin, userLogout }}>
            {children}
        </authContext.Provider>
    )
}

export const useAuth = () => useContext(authContext);