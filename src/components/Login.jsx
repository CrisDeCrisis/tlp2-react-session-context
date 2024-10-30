import React from 'react';
import { useAuth } from '../contexts/authProvider';
import { useForm } from 'react-hook-form';

export const Login = () => {
    const { userLogin } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = data => {
        console.log(data);
        userLogin(data.email, data.password);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="bg-gray-800 p-8 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center text-white">Iniciar Sesión</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            {...register('email', { required: 'El email es obligatorio' })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Introduce tu email"
                        />
                        {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            {...register('password', { required: 'La contraseña es obligatoria' })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-gray-300 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Introduce tu contraseña"
                        />
                        {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Iniciar Sesión
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};