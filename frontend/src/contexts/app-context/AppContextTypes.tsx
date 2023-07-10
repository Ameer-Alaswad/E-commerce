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

export type AppContextChildren = {
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

export type userSignedIn = {
    _id: string
    name: string
    email: string
    isAdmin: boolean
    token: string
}
export type AppContextTypes = {
    cartItems: Product[]
    setCartItems: React.Dispatch<React.SetStateAction<Product[]>>
    userSignedIn: userSignedIn | null
    setUserSignedIn: React.Dispatch<React.SetStateAction<userSignedIn | null>>
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
    handleNavigation: (text: string, navigate: NavigateFunction) => void;
    getMenuClickHandler: (path: string, navigate: NavigateFunction) => () => void;
    handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void
    handleSignOut: (navigate: NavigateFunction) => void;
}
export type UserData = {
    _id: string;
    name: string;
    email: string;
    isAdmin: boolean;
    token: string;
}
