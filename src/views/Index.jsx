import useSWR from 'swr';
import Product from '../components/Product';
import useKiosk from '../hooks/useKiosk';
import api from '../../config/api';
// import { useEffect, useState } from 'react';

export default function Index() {

    const { currentCategory } = useKiosk();

    const fetcher = () => api.get('/api/products').then(res => res.data.data);
    const { data, error, isLoading } = useSWR('/api/products', fetcher, {
        refreshInterval: 1000
    });

    // const [ productsDB, setProductsDB ] = useState([]);

    // const getProducts = async () => {
    //     try {
    //         const { data } = await api.get('/api/products');
    //         setProductsDB(data.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect( () => {
    //     getProducts();
    // },[]);

    if (isLoading) return "Cargando ...";
    const products = data.filter( p => p.category_id === currentCategory.id );

    return (
        <div className="h-full overflow-auto">

            <div className="sticky z-auto top-0 bg-white p-5">
                <h1 className="font-medium text-2xl">
                    {currentCategory.nombre}
                </h1>
                <p className="mt-1">
                    Elige y personaliza tu pedido a continuación
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                {products.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>

        </div>
    )
}
