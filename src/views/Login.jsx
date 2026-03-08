import { createRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function Login() {

    const emailRef = createRef();
    const passwordRef = createRef();

    const [ errors, setErrors ] = useState([]);
    const { login } = useAuth({
        middleware: 'guest',
        url: '/'
    });

    const handleSubmit = async e => {
        e.preventDefault();

        const datos = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        login(datos, setErrors);

    }

    return (
        <>
            <div className="flex flex-col justify-center h-full">

                <h1 className="font-medium text-lg text-center">Iniciar sesión</h1>

                <form onSubmit={handleSubmit}>
                    <div className="mt-5 space-y-1">
                        <label htmlFor="email" className="block text-sm">Correo electrónico</label>
                        <input type="email" id="email" name="email" ref={emailRef} className="text-sm p-2 w-full border rounded border-amber-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 focus:outline-none transition" />
                        {errors?.email && (
                            <p className="text-red-500 text-sm">
                                {errors.email[0]}
                            </p>
                        )}
                    </div>

                    <div className="mt-5 space-y-1">
                        <label htmlFor="password" className="block text-sm">Contraseña</label>
                        <input type="password" id="password" name="password" ref={passwordRef} className="text-sm p-2 w-full border rounded border-amber-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 focus:outline-none transition" />
                        {errors?.password && (
                            <p className="text-red-500 text-sm">
                                {errors.password[0]}
                            </p>
                        )}
                    </div>

                    <div className="mt-5">
                        <button type="submit" className="bg-amber-500 focus:border-amber-500 focus:ring-2 w-full rounded p-2 text-white text-sm hover:bg-amber-600 ease-linear duration-300 transition-colors hover:cursor-pointer font-semibold">Iniciar sesión</button>
                    </div>
                </form>
                
                <div className="mt-5 text-center">
                    <p>¿No tienes una cuenta?
                        <Link to="/auth/register" className="text-amber-400 hover:text-amber-600 transition ease-linear duration-300"> Crear cuenta</Link>
                    </p>
                </div>

            </div>
        </>
    )
}
