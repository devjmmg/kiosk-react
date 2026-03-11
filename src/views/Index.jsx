import useSWR from 'swr';
import { useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import useKiosk from '../hooks/useKiosk';
import api from '../../config/api';
import useAuth from '../hooks/useAuth';

export default function Index() {

    useAuth({ middleware: 'auth' });
    const { currentCategory, getCategories } = useKiosk();

    const token = localStorage.getItem('AUTH_TOKEN');

    useEffect(() => {
        getCategories();
    }, []);

    const fetcher = () => api.get('/api/product', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(res => res.data.data);

    const { data = [], error, isLoading } = useSWR('/api/product', fetcher, {
        refreshInterval: 5000
    });

    if (isLoading) return "Cargando...";
    if (error) return "Error cargando productos...";

    const products = Array.isArray(data)
    ? data.filter(p => p.category_id === currentCategory?.id && p.disponible === 1)
    : [];

    return (
        <div className="h-full overflow-auto">

            <div className="sticky top-0 bg-white p-5">
                <h1 className="font-medium text-2xl">
                    {currentCategory?.nombre}
                </h1>
                <p className="mt-1">
                    Elige y personaliza tu pedido a continuación
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                {products?.map(product => (
                    <ProductCard key={product.id} product={product} addButton={true} />
                ))}
            </div>

        </div>
    );
}