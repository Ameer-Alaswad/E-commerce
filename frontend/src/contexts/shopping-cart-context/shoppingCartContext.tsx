// react 
import { createContext, useState } from "react";
// types 
import { product, ShoppingCart, shoppingCartChildren } from "./shoppingCartContextTypes";


export const ShoppingCartContext = createContext({} as ShoppingCart);

export const ShoppingCartProvider = ({ children }: shoppingCartChildren) => {
    const [cartItems, setCartItems] = useState<product[]>([])

    return (

        <ShoppingCartContext.Provider
            value={ {
                cartItems, setCartItems
            } }
        >
            { children }
        </ShoppingCartContext.Provider>
    )
}

