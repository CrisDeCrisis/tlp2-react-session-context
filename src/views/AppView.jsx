import { useAuth } from '../contexts/authProvider';
import { Home } from '../components/home';
import { Login } from '../components/login';

function AppView() {
    const { state } = useAuth();

    return (
        state.isAuth ? <Home /> : <Login />
    )
}

export default AppView