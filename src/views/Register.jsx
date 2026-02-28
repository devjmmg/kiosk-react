import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <>
            <div className="flex flex-col justify-center h-full">

                <h1 className="font-medium text-lg text-center">Crear cuenta</h1>

                <form action="">
                    <div className="mt-5 space-y-1">
                        <label htmlFor="name" className="block text-sm">Nombre</label>
                        <input type="text" id="name" name="name" className="text-sm p-2 w-full border rounded border-amber-300 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 focus:outline-none transition" />
                    </div>

                    <div className="mt-5 space-y-1">
                        <label htmlFor="fname" className="block text-sm">Apellido paterno</label>
                        <input type="text" id="fname" name="fname" className="text-sm p-2 w-full border rounded border-amber-300 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 focus:outline-none transition" />
                    </div>

                    <div className="mt-5 space-y-1">
                        <label htmlFor="lname" className="block text-sm">Apellido materno</label>
                        <input type="text" id="lname" name="lname" className="text-sm p-2 w-full border rounded border-amber-300 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 focus:outline-none transition" />
                    </div>

                    <div className="mt-5 space-y-1">
                        <label htmlFor="email" className="block text-sm">Correo electrónico</label>
                        <input type="text" id="email" name="email" className="text-sm p-2 w-full border rounded border-amber-300 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 focus:outline-none transition" />
                    </div>

                    <div className="mt-5 space-y-1">
                        <label htmlFor="password" className="block text-sm">Contraseña</label>
                        <input type="password" id="password" name="password" className="text-sm p-2 w-full border rounded border-amber-300 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 focus:outline-none transition" />
                    </div>

                    <div className="mt-5 space-y-1">
                        <label htmlFor="password_confirmation" className="block text-sm">Confirmar contraseña</label>
                        <input type="password" id="password_confirmation" name="password_confirmation" className="text-sm p-2 w-full border rounded border-amber-300 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 focus:outline-none transition" />
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
