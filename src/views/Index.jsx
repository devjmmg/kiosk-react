import { products as productsDB } from '../data/products';
import Product from '../components/Product';
import useKiosk from '../hooks/useKiosk';

export default function Index() {

    const { currentCategory } = useKiosk();
    const products = productsDB.filter( p => p.categoria_id === currentCategory.id );

    return (
        <div className='p-5'>
            <h1 className='font-medium text-2xl'>{currentCategory.nombre}</h1>
            <p className='mt-1'>Elige y personaliza tu pedido a continuación</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5'>
                {products.map( product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}
