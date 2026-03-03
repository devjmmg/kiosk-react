import { useEffect, useState } from "react";
import useKiosk from "../hooks/useKiosk";

export default function ModalProduct() {

    const { handleClickModal, product, handleAddOrder, order } = useKiosk();
    const [ quantity, setQuantity] = useState(1);
    const [ edit, setEdit] = useState(false);

    useEffect(() => {
        if (order.some(o => o.id === product.id)) {
            const p = order.filter( o => o.id === product.id)[0];
            setQuantity(p.quantity);
            setEdit(true);
        }
    },[order]);

    return (
        <div className="relative bg-white p-6 rounded-2xl max-w-md mx-auto">

            {/* Botón X */}
            <button
                type="button"
                onClick={ () => {
                    handleClickModal()
                    setQuantity(1);
                }}
                className="absolute top-0 right-0 text-gray-400 hover:text-gray-800 duration-300 ease-linear transition-colors text-2xl font-bold cursor-pointer"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Imagen */}
            <img src={`/img/${product.imagen}.jpg`} alt={`Imagen ${product.nombre}`} className="w-full object-cover rounded" />

            {/* Información */}
            <div className="mt-5 space-y-3 text-center">
                <h3 className="text-base font-bold text-gray-800">
                    {product.nombre}
                </h3>

                <p className="text-3xl font-black text-amber-500">
                    ${product.precio}
                </p>

                {/* Cantidad */}
                <div className="flex justify-center items-center gap-2">

                    <p className="text-base font-medium text-gray-800">
                        Cantidad
                    </p>

                        <button
                            type="button"
                            onClick={() => {
                                if (quantity <= 1) return;
                                setQuantity(prev => prev - 1);
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                        </button>

                        <span className="">
                            {quantity}
                        </span>

                        <button
                            type="button"
                            onClick={() => {
                                if (quantity >= 10) return;
                                setQuantity(prev => prev + 1);
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                        </button>

                </div>
                
                <button onClick={() => { handleAddOrder({...product, quantity}); handleClickModal() }} type="button" className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded font-bold transition-colors cursor-pointer">
                    { edit ? 'Guardar cambios' : 'Agregar al pedido'}
                </button>
            </div>
        </div>
    );
}