import useKiosk from "../hooks/useKiosk";
import SummaryProduct from "./SummaryProduct";

export default function Summary() {

    const { order, total, handleSubmitNewOrder } = useKiosk();
    const handleSubmit = e => {
        e.preventDefault();
        handleSubmitNewOrder();
    }
    const isDisabled = () => order.length === 0;

    return (
        <div className="flex flex-col h-full p-5">
            
            <div>
                <h1 className='font-medium text-2xl'>Mi pedido</h1>
                <p className='mt-1'>Aquí podrás ver el resumen y totales de tu pedido</p>
            </div>

            { order.length === 0 ? (

                <div className="flex-1 flex flex-col items-center justify-center mt-4 text-center">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="w-10 h-10 text-gray-300 mb-4"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386a.75.75 0 0 1 .74.602l.518 2.59m0 0L6.75 13.5m-1.846-7.308h13.338a.75.75 0 0 1 .74.898l-1.5 7.5a.75.75 0 0 1-.74.602H6.75m0 0a1.5 1.5 0 1 0 3 0m-3 0a1.5 1.5 0 1 1-3 0" />
                    </svg>

                    <p className="text-gray-400 font-semibold text-base">
                        Tu carrito está vacío
                    </p>

                    <p className="text-gray-400 text-sm mt-1">
                        Agrega productos para comenzar tu pedido
                    </p>
                </div>
            ) : (
                <div className="flex-1 mt-4 overflow-auto">
                    {order.map( product => (
                        <SummaryProduct key={product.id} product={product} />
                    ))}
                </div>
            ) }

            <form onClick={handleSubmit} className="mt-4">
                <p>
                    Total: ${total.toFixed(2)}
                </p>
                <button
                    
                    type="submit"
                    disabled={isDisabled()}
                    className={`
                        mt-4 text-white p-2 rounded w-full transition-colors duration-300
                        ${isDisabled() 
                            ? "bg-green-300 cursor-not-allowed opacity-70" 
                            : "bg-green-500 hover:bg-green-600 cursor-pointer"
                        }
                    `}
                >
                    Confirmar pedido
                </button>
            </form>
        </div>
    )
}
