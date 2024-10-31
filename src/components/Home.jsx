import { Loading } from './Loading.jsx'
import { useAuth } from '../contexts/authProvider.jsx'

export const Home = () => {
    const { state, userLogout } = useAuth();

    if (state.isLoading) {
        return <Loading />;
    }

    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-4">React Context Session</h1>
            <p className="text-lg">Bienvenido a React Context Session.</p>
            <button
                onClick={userLogout}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
                Cerrar Sesión
            </button>
        </div>
    )
}