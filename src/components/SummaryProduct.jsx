import useKiosk from "../hooks/useKiosk";

export default function SummaryProduct({ product }) {
    
    const { handleClickModal, handleSetProduct, handleDeleteProduct } = useKiosk();
    const { nombre, precio, quantity } = product;
    
    return (
        <div className="text-sm mt-4 border-b border-amber-300">
        
            {/* Nombre */}
            <p className="font-medium text-gray-800">
            {nombre}
            </p>
            
            {/* Detalles */}
            <div className="flex flex-col text-gray-600 mt-1">
                <span>Cantidad: {quantity}</span>
                <span>Precio: ${precio}</span>
                <span className="font-semibold text-amber-600">
                Subtotal: ${(precio * quantity).toFixed(2)}
                </span>
            </div>
                
                {/* Acciones */}
            <div className="flex justify-center items-center my-3 gap-2">
                
                {/* Editar */}
                <button type="button"
                    onClick={ () => { 
                        handleClickModal(); 
                        handleSetProduct(product); 
                    }}
                    className="flex items-center gap-1 text-amber-500 bg-amber-200 p-1 rounded cursor-pointer hover:text-amber-700 transition-colors duration-300 ease-linear">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </button>
                
                {/* Eliminar */}
                <button type="button"
                    onClick={ () => {
                        handleDeleteProduct(product);
                    }}
                    className="flex items-center gap-1 text-red-500 bg-red-200 p-1 rounded cursor-pointer hover:text-red-700 transition-colors duration-300 ease-linear">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </button>
            
            </div>
        
        </div>
    );
}