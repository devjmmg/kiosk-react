import useKiosk from "../hooks/useKiosk";

export default function Product({product, addButton = false, allowButton = false}) {
    
    const { handleClickModal, handleSetProduct, order, handleClickOutOfStockProduct } = useKiosk();
    const { nombre, precio, imagen, categoria_id, id} = product;
    const isInOrder = order.some(o => o.id === id);
    const isAllow = product.disponible;

    return (
        <>
            <div className="border border-amber-500 rounded p-5 shadow bg-white">
                <img src={`/img/${imagen}.jpg`} className="w-full" alt={`Imagen ${nombre}`} loading="lazy" />
                <div className="p-5">
                    <h3 className="text-center text-sm font-medium">{nombre}</h3>
                    <p className="text-center font-bold mt-3 text-2xl text-amber-500">${precio}</p>
                </div>
                {addButton &&  (
                    <button type="button" onClick={ () => { handleClickModal(); handleSetProduct(product); }} className={`${isInOrder ? 'bg-amber-700' : 'bg-amber-400'} hover:bg-amber-700 ease-linear duration-300 transition-colors cursor-pointer text-white p-2 rounded w-full`}>{isInOrder ? 'Editar' : 'Agregar'}</button>
                )}
                {allowButton &&  (
                    <button type="button" onClick={ () => { handleClickOutOfStockProduct(product.id) }} className={`${isAllow ? 'bg-amber-400 hover:bg-amber-500' : 'bg-amber-700 hover:bg-amber-600'}  ease-linear duration-300 transition-colors cursor-pointer text-white p-2 rounded w-full`}>{isAllow ? 'Disponible' : 'Agotado'}</button>
                )}
            </div>
        </>
    )
}
