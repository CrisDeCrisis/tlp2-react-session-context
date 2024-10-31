import { useAuth } from '../contexts/authProvider';
import { Home } from '../components/Home';
import { Login } from '../components/Login';
import { Loading } from '../components/Loading';

function AppView() {
    const { state } = useAuth();

    if (state.isLoading) {
        return <Loading />;
    }

    return (
        state.isAuth ? <Home /> : <Login />
    )
}

export default AppView