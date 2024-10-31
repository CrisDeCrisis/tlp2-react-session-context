import { createContext, useContext, useReducer } from "react";
import { login, logout } from '../hooks/useSession.js';
import { profileReducer } from "./authReducer.js";
import { authTypes } from "./authTypes.js";
import toast from "react-hot-toast";

const authContext = createContext();

export const SessionProvider = ({ children }) => {
    const initialState = {
        user: null,
        isAuth: null,
        error: null,
        isLoading: false
    };

    const [state, dispatch] = useReducer(profileReducer, initialState);

    const handleLoading = async () => {
        dispatch({
            type: authTypes.LOADING
        });
    };

    const userLogin = async (email, password) => {
        handleLoading();
        try {
            const response = await login(email, password);
            if (response) {
                dispatch({
                    type: authTypes.LOGIN,
                    payload: response.data
                });
                handleLoading();
                return toast.success(`Bienvenido ${response.data.userName}`);
            }
            handleLoading();
        } catch (error) {
            handleLoading();
            return toast.error('Credenciales incorrectas');
        }
    };

    // const userSession = async () => {
    //     try {
    //         const response = await session();
    //         if (response.ok) {
    //             dispatch({
    //                 type: authTypes.SESSION,
    //                 payload: response.data
    //             });
    //         }
    //         return response;
    //     } catch (error) {
    //         dispatch({
    //             type: authTypes.SESSION,
    //             payload: error
    //         });
    //         return error;
    //     }
    // };

    const userLogout = async () => {
        handleLoading();
        try {
            const response = await logout();
            if (response.ok) {
                toast.success(`Hasta luego ${state.user.userName}`);
                dispatch({
                    type: authTypes.LOGOUT
                });
                handleLoading();
                return
            }
            return response;
        } catch (error) {
            handleLoading();
            return toast.error('Error al cerrar sesión');
        }
    };

    return (
        <authContext.Provider value={{ state, userLogin, userLogout }}>
            {children}
        </authContext.Provider>
    );
};

export const useAuth = () => useContext(authContext);