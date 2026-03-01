import { createContext, useState } from "react";
import { categories as categoriesDB } from "../data/categories"

const KioskContext = createContext();

const KioskProvider = ({children}) => {

    const [categories, setCategory] = useState(categoriesDB); // Valor inicial
    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    const handleClickCategory = id => {
        const category = categories.filter( c  => c.id === id)[0];
        setCurrentCategory(category);
    }

    return (
        <KioskContext.Provider value={{ categories, currentCategory, handleClickCategory }}>
            {children}
        </KioskContext.Provider>
    );

}

export {
    KioskProvider
}

export default KioskContext;