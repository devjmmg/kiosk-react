import useAuth from "../hooks/useAuth";
import useKiosk from "../hooks/useKiosk"
import Category from "./Category"

export default function Sidebar() {

    const { logout, user } = useAuth({middleware: 'auth'});
    const { categories } = useKiosk();

    return (
        <div className="flex flex-col h-full p-5">

            {/* Logo */}
            <div className="flex justify-center">
                <img src="/img/logo.svg" className="w-48" alt="Logo" />
            </div>

            <p className="mt-4 text-center">Hola {user && user.name}</p>

            {/* Categorías */}
            <div className="flex-1 overflow-auto mt-4">
                <div className="space-y-3">
                    {categories.map(category => (
                        <Category key={category.id} category={category} />
                    ))}
                </div>
            </div>

            {/* Botón abajo */}
            <div className="mt-4">
                <button
                    onClick={logout}
                    type="button"
                    className="bg-red-500 hover:bg-red-600 transition-colors duration-300 ease-linear text-white p-2 rounded w-full cursor-pointer"
                >
                    Salir
                </button>
            </div>

        </div>
    )
}