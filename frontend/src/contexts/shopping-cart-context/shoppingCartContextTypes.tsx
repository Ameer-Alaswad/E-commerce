export type ShoppingCart = {
    cartItems: product[]
    setCartItems: React.Dispatch<React.SetStateAction<product[]>>
}

export type product = {
    productId: string
    quantity: number
    productLimit: number
}

export type shoppingCartChildren = {
    children: React.ReactNode
}
