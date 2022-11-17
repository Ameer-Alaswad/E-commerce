// react 
import { createContext, useState } from "react";
// types 
import { product, ShoppingCart, shoppingCartChildren, userSignin } from "./shoppingCartContextTypes";



export const ShoppingCartContext = createContext({} as ShoppingCart);

export const ShoppingCartProvider = ({ children }: shoppingCartChildren) => {
    const [cartItems, setCartItems] = useState<product[]>([])
    const [userSignin, setUserSignin] = useState<userSignin | null>(null)

    return (

        <ShoppingCartContext.Provider
            value={ {
                cartItems, setCartItems, userSignin, setUserSignin
            } }
        >
            { children }
        </ShoppingCartContext.Provider>
    )
}

