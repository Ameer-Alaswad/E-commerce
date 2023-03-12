export interface OrderHistory {
    createdAt: string;
    isDelivered: boolean;
    isPaid: boolean;
    itemsPrice: string;
    orderItems: {
        productId: string;
        quantity: number;
        image: string;
        price: number;
        product: string;
    }[];
    paidAt: string;
    deliveredAt?: string;
    paymentMethod: string;
    paymentResult: { id: string; status: string };
    shippingAddress: {
        fullName: string;
        address: string;
        city: string;
        postalCode: string;
        country: string;
    };
    shippingPrice: string;
    taxPrice: string;
    totalPrice: string;
    updatedAt: string;
    user: string;
    _id: string;
}
export interface tableProps {
    orderHistory: OrderHistory[];
}