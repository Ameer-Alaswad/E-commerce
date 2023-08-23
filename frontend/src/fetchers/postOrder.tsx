import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { toast } from "react-toastify";
import { Product } from "../contexts/shopping-cart-context/Types";
import { ShippingAddressDataType } from "../contexts/checkout-context/Types";

// types
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
    orderData: OrderData;
    navigate: NavigateFunction;
    userToken: string | undefined;
    setShoppingCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
};

export const postUser = async ({
    URL,
    orderData,
    navigate,
    userToken,
    setShoppingCartItems,
}: PostUserDataArgs) => {
    try {
        const { data } = await axios.post(URL, orderData, {
            headers: {
                authorization: `Bearer ${userToken}`,
            },
        });
        setShoppingCartItems([]);
        navigate(`/order/${data.order._id}`);
    } catch (error: any) {
        toast.error(error?.message);
    }
};