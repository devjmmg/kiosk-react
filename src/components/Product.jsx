export default function Product({product}) {
    
    const { nombre, precio, imagen, categoria_id, id} = product;

    return (
        <>
            <div className="border border-amber-500 rounded p-5 shadow bg-white">
                <img src={`../../public/img/${imagen}.jpg`} className="w-full" alt={`Imagen ${nombre}`} />
                <div className="p-5">
                    <h3 className="text-center text-sm font-medium">{nombre}</h3>
                    <p className="text-center font-bold mt-3 text-2xl text-amber-500">${precio}</p>
                </div>
                <button type="button" className="bg-amber-500 hover:bg-amber-600 ease-linear duration-300 transition-colors cursor-pointer text-white p-2 rounded w-full">Agregar</button>
            </div>
        </>
    )
}
