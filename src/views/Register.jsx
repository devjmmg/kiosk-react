import { createRef, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../config/api';
import useAuth from '../hooks/useAuth';

export default function Register() {

    const nameRef = createRef();
    const fnameRef = createRef();
    const lnameRef = createRef();
    const emailRef = createRef();
    const passwordRef = createRef();
    const passwordConfirmationRef = createRef();

    const [ errors, setErrors ] = useState([]);
    const { register } = useAuth({
            middleware: 'guest',
            url: '/'
        });

    const handleSubmit = async e => {
        e.preventDefault();

        const datos = {
            name: nameRef.current.value,
            fname: fnameRef.current.value,
            lname: lnameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
        }

        register(datos, setErrors);

    }

    return (
        <>
            <div className="flex flex-col justify-center">

                <h1 className="font-medium text-lg text-center">Crear cuenta</h1>

                {/* {errors ? errors.map( (error, index) => <Alert key={index} message={error} />) : null} */}

                <form onSubmit={handleSubmit}>
                    <div className="mt-5 space-y-1">
                        <label htmlFor="name" className="block text-sm">Nombre</label>
                        <input type="text" id="name" name="name" ref={nameRef} className="text-sm p-2 w-full border rounded border-amber-300 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 focus:outline-none transition" />
                        {errors?.name && (
                            <p className="text-red-500 text-sm">
                                {errors.name[0]}
                            </p>
                        )}
                    </div>

                    <div className="mt-5 space-y-1">
                        <label htmlFor="fname" className="block text-sm">Apellido paterno</label>
                        <input type="text" id="fname" name="fname" ref={fnameRef} className="text-sm p-2 w-full border rounded border-amber-300 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 focus:outline-none transition" />
                        {errors?.fname && (
                            <p className="text-red-500 text-sm">
                                {errors.fname[0]}
                            </p>
                        )}
                    </div>

                    <div className="mt-5 space-y-1">
                        <label htmlFor="lname" className="block text-sm">Apellido materno</label>
                        <input type="text" id="lname" name="lname" ref={lnameRef} className="text-sm p-2 w-full border rounded border-amber-300 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 focus:outline-none transition" />
                        {errors?.lname && (
                            <p className="text-red-500 text-sm">
                                {errors.lname[0]}
                            </p>
                        )}
                    </div>

                    <div className="mt-5 space-y-1">
                        <label htmlFor="email" className="block text-sm">Correo electrónico</label>
                        <input type="text" id="email" name="email" ref={emailRef} className="text-sm p-2 w-full border rounded border-amber-300 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 focus:outline-none transition" />
                        {errors?.email && (
                            <p className="text-red-500 text-sm">
                                {errors.email[0]}
                            </p>
                        )}
                    </div>

                    <div className="mt-5 space-y-1">
                        <label htmlFor="password" className="block text-sm">Contraseña</label>
                        <input type="password" id="password" name="password" ref={passwordRef} className="text-sm p-2 w-full border rounded border-amber-300 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 focus:outline-none transition" />
                        {errors?.password && (
                            <p className="text-red-500 text-sm">
                                {errors.password[0]}
                            </p>
                        )}
                    </div>

                    <div className="mt-5 space-y-1">
                        <label htmlFor="password_confirmation" className="block text-sm">Confirmar contraseña</label>
                        <input type="password" id="password_confirmation" name="password_confirmation" ref={passwordConfirmationRef} className="text-sm p-2 w-full border rounded border-amber-300 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 focus:outline-none transition" />
                        {errors?.password_confirmation && (
                            <p className="text-red-500 text-sm">
                                {errors.password_confirmation[0]}
                            </p>
                        )}
                    </div>

                    <div className="mt-5">
                        <button type="submit" className="text-white text-sm p-2 w-full border rounded bg-amber-500 hover:bg-amber-600 ease-linear duration-300 transition-colors  border-amber-300 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 focus:outline-none hover:cursor-pointer">Crear cuenta</button>
                    </div>
                </form>

                <div className="mt-5 text-center">
                    <p>Ya tienes una cuenta?
                        <Link to="/auth/login" className="text-amber-400 hover:text-amber-600 transition ease-linear duration-300"> Iniciar sesión</Link>
                    </p>
                </div>

            </div>
        </>
    )
}
