import { useState, useEffect } from 'react'
import { Loading } from './Loading.jsx'

export const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-4">React Context Session</h1>
            <p className="text-lg">Bienvenido a React Context Session.</p>
        </div>
    )
}