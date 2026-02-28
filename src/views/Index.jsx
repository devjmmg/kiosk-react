import { products } from '../data/products';
import Product from '../components/Product';

export default function Index() {
    console.log(products);
    return (
        <div className='p-5'>
            <h1 className='font-medium text-2xl'>Inicio</h1>
            <p className='mt-1'>Elige y personaliza tu pedido a continuación</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5'>
                {products.map( product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}
