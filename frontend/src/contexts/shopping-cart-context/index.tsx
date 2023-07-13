import { createContext, useState } from "react";
import { Product, ShoppingCart } from "./Types";
import { ContextChildren } from "../app-context/Types";

export const ShoppingCartContext = createContext({} as ShoppingCart);

const ShoppingCartContextProvider = ({ children }: ContextChildren) => {
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
};

export default ShoppingCartContextProvider;
