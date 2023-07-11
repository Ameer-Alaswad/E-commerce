import { createContext, useState } from "react";
import { Product, ShoppingCart, ShoppingCartChildren } from "./Types";

export const ShoppingCartContext = createContext({} as ShoppingCart);


const ShoppingCartContextProvider = ({ children }: ShoppingCartChildren) => {
    const [shoppingCartItems, setShoppingCartItems] = useState<Product[]>([]);

    return (
        <ShoppingCartContext.Provider
            value={ {
                shoppingCartItems,
                setShoppingCartItems,

            } }
        >
            { children }
        </ShoppingCartContext.Provider>
    );
}

export default ShoppingCartContextProvider