import { createContext, useState } from "react";
import { categories as categoriesDB } from "../data/categories"

const KioskContext = createContext();

const KioskProvider = ({children}) => {

    const [categories, setCategory] = useState(categoriesDB); // Valor inicial
    const [currentCategory, setCurrentCategory] = useState(categories[0]);
    const [modal, setModal] = useState(false);
    const [product, setProduct] = useState({});

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

    return (
        <KioskContext.Provider value={{ categories, currentCategory, handleClickCategory, modal, handleClickModal, product, handleSetProduct }}>
            {children}
        </KioskContext.Provider>
    );

}

export {
    KioskProvider
}

export default KioskContext;