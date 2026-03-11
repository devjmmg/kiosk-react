import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../config/api";

const KioskContext = createContext();

const KioskProvider = ({children}) => {

    const [categories, setCategory] = useState([]); // Valor inicial
    const [currentCategory, setCurrentCategory] = useState({});
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

    const getCategories = async () => {
        const token = localStorage.getItem('AUTH_TOKEN');
        try {
            const { data } = await api.get('/api/category', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const categories = data.data ?? [];
            setCategory(categories);
            setCurrentCategory(categories[0] ?? null);

        } catch (error) {
            console.log(error);
        }
    };

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

    const handleSubmitNewOrder = async () => {
        const token = localStorage.getItem('AUTH_TOKEN');
        try {
            const response = await api.post('/api/order', { 
                total, 
                products: order.map( product => {
                    return {
                        id: product.id,
                        quantity: product.quantity,
                        subtotal: product.quantity * product.precio
                    }
                })
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            toast.success(response.data.message);
            setOrder([]);
        } catch (error) {
            console.log(error);
        }
    }

    const handleClickCompleteOrder = async (id) => {
        const token = localStorage.getItem('AUTH_TOKEN');
        try {
            const { data } = await api.put(`/api/order/${id}`,  {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            toast.success(`Orden ${data} completado`);
        } catch (error) {
            console.log(error);
        }
    }

    const handleClickOutOfStockProduct = async (id) => {
        const token = localStorage.getItem('AUTH_TOKEN');
        try {
            const { data } = await api.put(`/api/product/${id}`,  {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            toast.success(`Producto ${data} actualizado`);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <KioskContext.Provider value={{
                categories,
                currentCategory,
                handleClickCategory,
                modal,
                handleClickModal,
                product,
                handleSetProduct,
                order,
                handleAddOrder,
                handleDeleteProduct,
                total,
                handleSubmitNewOrder,
                handleClickCompleteOrder,
                handleClickOutOfStockProduct,
                getCategories
            }}>
            {children}
        </KioskContext.Provider>
    );

}

export {
    KioskProvider
}

export default KioskContext;