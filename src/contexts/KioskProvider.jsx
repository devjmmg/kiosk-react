import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { categories as categoriesDB } from "../data/categories"

const KioskContext = createContext();

const KioskProvider = ({children}) => {

    const [categories, setCategory] = useState(categoriesDB); // Valor inicial
    const [currentCategory, setCurrentCategory] = useState(categories[0]);
    const [modal, setModal] = useState(false);
    const [product, setProduct] = useState({});
    const [order, setOrder] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(
            order.reduce(
                (total, product) => total + (product.precio * product.quantity),
                0
            )
        );
    },[order]);

    const handleClickCategory = id => {
        const category = categories.filter( c  => c.id === id)[0];
        setCurrentCategory(category);
    }

    const handleClickModal = () => {
        setModal(!modal);
    }

    const handleSetProduct = product => {
        setProduct(product);
    }

    const handleDeleteProduct = product => {
        setOrder(order.filter( o => o.id !== product.id));
        toast.success('Producto eliminado');
    }

    const handleAddOrder = ({categoria_id, ...product}) => {
        if (order.some(o => o.id === product.id)) {
            const updateOrder = order.map( o => o.id === product.id ? product : o);
            setOrder(updateOrder);
            toast.success('Producto actualizado');
        } else {
            setOrder([...order, product]);
            toast.success('Producto agregado');
        }
    }

    return (
        <KioskContext.Provider value={{ categories, currentCategory, handleClickCategory, modal, handleClickModal, product, handleSetProduct, order, handleAddOrder, handleDeleteProduct, total }}>
            {children}
        </KioskContext.Provider>
    );

}

export {
    KioskProvider
}

export default KioskContext;