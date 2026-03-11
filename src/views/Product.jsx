import useSWR from "swr";
import useAuth from "../hooks/useAuth";
import api from "../../config/api";
import ProductCard from "../components/ProductCard";

export default function Products() {

    useAuth({ middleware: 'admin' });

    const token = localStorage.getItem('AUTH_TOKEN');

    const fetcher = (url) => api.get(url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(res => res.data);

    const { data, error, isLoading } = useSWR('/api/product', fetcher, {
        refreshInterval: 1000
    });

    if (isLoading) return 'Cargando...';
    if (error) return 'Error cargando productos';

    const products = data?.data ?? [];

    return (
        <div className="h-full overflow-auto">
        
            <div className="sticky top-0 bg-white p-5">
                <h1 className="font-medium text-2xl">
                    Productos
                </h1>
                <p className="mt-1">
                    Maneja la disponibilidad desde aquí.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} allowButton={true} />
                ))}
            </div>

        </div>
    );
}