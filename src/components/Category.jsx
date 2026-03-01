import useKiosk from "../hooks/useKiosk";

export default function Category({category}) {
    
    const { handleClickCategory, currentCategory } = useKiosk();
    const { icono, nombre, id } = category;
    
    return (
        <button type="button" onClick={() => handleClickCategory(id)} className={`${currentCategory.id === id ? 'bg-amber-700' : 'bg-amber-400'} flex gap-2 items-center hover:bg-amber-700 ease-linear duration-300 transition-colors text-white p-2 rounded w-full cursor-pointer`}>
            <img src={`/img/icono_${icono}.svg`}  className="w-10" alt={`Icono ${nombre}`} />
            <span className="font-medium text-sm"> {nombre} </span>
        </button>
    )
}
