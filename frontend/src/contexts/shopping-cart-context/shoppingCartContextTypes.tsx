
export type product = {
    productId: string
    quantity: number
    productLimit: number
}

export type shoppingCartChildren = {
    children: React.ReactNode
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
    shippingAddresData: ShippingAddressDataType
    setShippingAddresData: React.Dispatch<React.SetStateAction<ShippingAddressDataType>>
    progressStep: number
    setProgressStep: React.Dispatch<React.SetStateAction<number>>
    paymentMethod: string
    setPaymentMethod: React.Dispatch<React.SetStateAction<string>>
}
export type ShippingAddressDataType = {
    fullName: string
    address: string
    city: string
    postalCode: string
    country: string
}