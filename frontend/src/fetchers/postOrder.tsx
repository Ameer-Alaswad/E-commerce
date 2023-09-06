import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { toast } from "react-toastify";
import { Product } from "../contexts/shopping-cart-context/Types";
import { ShippingAddressDataType } from "../contexts/checkout-context/Types";

type OrderData = {
    orderItems: Product[];
    shippingAddress: ShippingAddressDataType;
    paymentMethod: string;
    totalItemsPrice: number;
    shippingPrice: number;
    taxes: number;
    totalPrice: number;
};

type PostUserDataArgs = {
    URL: string;
    orderInfo: OrderData;
    navigate: NavigateFunction;
    userToken: string | undefined;
    setShoppingCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
    setOrderData: any
};

export const postUser = async ({
    URL,
    orderInfo,
    navigate,
    userToken,
    setShoppingCartItems,
    setOrderData
}: PostUserDataArgs) => {
    try {
        const { data } = await axios.post(URL, orderInfo, {
            headers: {
                authorization: `Bearer ${userToken}`,
            },
        });
        const newOrderId = data?.order._id;
        setShoppingCartItems([]);
        setOrderData(orderInfo);
        toast.success('Order was placed successfully')
        navigate(`/order/${newOrderId}`);
    } catch (error: any) {
        toast.error(error?.message);
    }
};