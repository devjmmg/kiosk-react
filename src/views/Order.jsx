import useSWR from "swr";
import useKiosk from '../hooks/useKiosk';
import useAuth from "../hooks/useAuth"
import api from "../../config/api";

export default function Orders() {

    useAuth({middleware: 'admin'});
    const { handleClickCompleteOrder } = useKiosk();
    const token = localStorage.getItem('AUTH_TOKEN')
    const fetcher = () => api.get('/api/order', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const { data, error, isLoading } = useSWR('/api/order', fetcher, {
        refreshInterval: 1000
    });

    if (isLoading) {
        return 'Cargando...';
    }

    return (
        <div className="h-full overflow-auto">
        
            <div className="sticky z-auto top-0 bg-white p-5">
                <h1 className="font-medium text-2xl">
                    Ordenes
                </h1>
                <p className="mt-1">
                    Administra las ordenes desde aqí.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
                {data?.data?.data?.map( order => (
                    <div key={order.id} className="bg-white p-5 shadow-xl rounded-lg flex flex-col h-full">

                        <p className="text-base font-semibold text-gray-600 mb-3">
                            Orden {order.id}
                        </p>

                        <div className="space-y-3">
                            {order.products.map(product => (
                                <div
                                    key={product.id}
                                    className="border-b border-gray-200 last:border-0 pb-3"
                                >
                                    <p className="text-sm text-gray-500">
                                        ID: {product.id}
                                    </p>

                                    <p className="font-medium">
                                        {product.nombre}
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        Cantidad
                                        <span className="font-semibold ml-1">
                                            {product.pivot.quantity}
                                        </span>
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* esta sección empuja el botón hacia abajo */}
                        <div className="mt-auto pt-4">

                            <p className="text-base text-gray-600">
                                Cliente:
                                <span className="font-semibold ml-1">
                                    {order.user.name} {order.user.fname} {order.user.lname}
                                </span>
                            </p>

                            <p className="text-base text-amber-600 mt-1">
                                Precio:
                                <span className="font-semibold ml-1">
                                    ${order.total}
                                </span>
                            </p>

                            <button
                                onClick={ () => handleClickCompleteOrder(order.id)}
                                type="button"
                                className="mt-4 text-white p-2 rounded w-full transition-colors duration-300 bg-green-500 hover:bg-green-600 cursor-pointer"
                            >
                                Completo
                            </button>

                        </div>

                    </div>
                )) }
            </div>
        </div>
    )
}
