import React, { createContext, useState } from "react";
type shoppingCartChildren = {
    children: React.ReactNode
}
type ShoppingCart = {
    cartItems: product[]
    setCartItems: React.Dispatch<React.SetStateAction<product[]>>
}
export type product = {
    productId: string
    quantity: number
    productLimit: number
}
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

