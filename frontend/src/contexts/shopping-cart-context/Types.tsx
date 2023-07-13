export type Product = {
    productId: string
    quantity: number
    productLimit: number
    image: string
    price: number
    product: string
    countInStock: number
}

export type ShoppingCart = {
    shoppingCartItems: Product[]
    setShoppingCartItems: React.Dispatch<React.SetStateAction<Product[]>>
}
