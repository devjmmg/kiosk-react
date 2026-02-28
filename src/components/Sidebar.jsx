import { categories } from "../data/categories"
import Category from "./Category"

export default function Sidebar() {
    return (
        <div className="flex flex-col justify-between h-full p-5">
            <div>
                <div className="flex justify-center">
                    <img src="../img/logo.svg" className="w-48" alt="Logo" />
                </div>
            
                <div className="mt-3 space-y-3">
                    {categories.map( category => (
                        <Category key={category.id} category={category} />
                    ))}
                </div>
            </div>
            <div>
                <button type="button" className="bg-red-500 hover:bg-red-600 ease-linear duration-300 transition-colors cursor-pointer text-white p-2 rounded w-full">Cancelar</button>
            </div>
        
        </div>
    )
}
