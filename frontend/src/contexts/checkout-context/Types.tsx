export type Product = {
    productId: string
    quantity: number
    productLimit: number
    image: string
    price: number
    product: string
    countInStock: number
}

export type ShippingAddressDataType = {
    fullName: string
    address: string
    city: string
    postalCode: string
    country: string
}

export type CheckoutContextTypes = {
    shippingAddressData: ShippingAddressDataType
    setShippingAddressData: React.Dispatch<React.SetStateAction<ShippingAddressDataType>>
    progressStep: number
    setProgressStep: React.Dispatch<React.SetStateAction<number>>
    paymentMethod: string
    setPaymentMethod: React.Dispatch<React.SetStateAction<string>>
}