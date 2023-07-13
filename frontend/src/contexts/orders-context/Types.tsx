import { ShippingAddressDataType } from "../checkout-context/Types"

export type OrderItems = {
    productId: string
    quantity: number
    image: string
    price: number
    product: string
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

export type OrdersContextTypes = {
    orderData: OrderData | null
    setOrderData: React.Dispatch<React.SetStateAction<OrderData | null>>
}