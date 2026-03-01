import { products as productsDB } from '../data/products';
import Product from '../components/Product';
import useKiosk from '../hooks/useKiosk';

export default function Index() {

    const { currentCategory } = useKiosk();
    const products = productsDB.filter( p => p.categoria_id === currentCategory.id );

    return (
        <div className="h-full overflow-auto">

            <div className="sticky top-0 bg-white z-10 p-5">
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
