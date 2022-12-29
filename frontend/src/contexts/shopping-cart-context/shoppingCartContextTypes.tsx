
export type product = {
    productId: string
    quantity: number
    productLimit: number
    image: string
    price: number
    product: string
}

export type OrderItems = {
    productId: string
    quantity: number
    image: string
    price: number
    product: string
}

export type shoppingCartChildren = {
    children: React.ReactNode
}
export type ShippingAddressDataType = {
    fullName: string
    address: string
    city: string
    postalCode: string
    country: string
}

export type OrderData = {
    createdAt: string
    isPaid: boolean
    itemsPrice: string
    orderItems: OrderItems[]
    paymentMethod: string
    shippingAddress: ShippingAddressDataType
    shippingPrice: string
    taxPrice: string
    totalPrice: string
    updatedAt: string
    user: string
    isDelivered: boolean
    _id: string

}

export type userSignin = {
    _id: string
    name: string
    email: string
    isAdmin: boolean
    token: string
}
export type ShoppingCart = {
    cartItems: product[]
    setCartItems: React.Dispatch<React.SetStateAction<product[]>>
    userSignin: userSignin | null
    setUserSignin: React.Dispatch<React.SetStateAction<userSignin | null>>
    shippingAddressData: ShippingAddressDataType
    setShippingAddressData: React.Dispatch<React.SetStateAction<ShippingAddressDataType>>
    progressStep: number
    setProgressStep: React.Dispatch<React.SetStateAction<number>>
    paymentMethod: string
    setPaymentMethod: React.Dispatch<React.SetStateAction<string>>
    orderData: OrderData | null
    setOrderData: React.Dispatch<React.SetStateAction<OrderData | null>>
}