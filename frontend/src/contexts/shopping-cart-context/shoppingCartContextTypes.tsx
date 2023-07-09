import { NavigateFunction } from "react-router-dom";

export type Product = {
    productId: string
    quantity: number
    productLimit: number
    image: string
    price: number
    product: string
    countInStock: number
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
    cartItems: Product[]
    setCartItems: React.Dispatch<React.SetStateAction<Product[]>>
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
    userOptionsOpen: HTMLElement | null
    setUserOptionsOpen: React.Dispatch<React.SetStateAction<HTMLElement | null>>
    userOptionsOpenMobile: HTMLElement | null
    setUserOptionsOpenMobile: React.Dispatch<React.SetStateAction<HTMLElement | null>>
    isMenuOpen: boolean
    isMobileMenuOpen: boolean
    handleMobileMenuClose: () => void;
    handleMenuClose: () => void;
    handleMobileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
    handleNavigation: (navigationPath: () => void) => void;
    handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void
    handleSignOut: (navigate: () => void) => void;
}
export type UserData = {
    _id: string;
    name: string;
    email: string;
    isAdmin: boolean;
    token: string;
}
