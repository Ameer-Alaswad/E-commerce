// axios
import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import {
    product,
    ShippingAddressDataType,
} from "../contexts/shopping-cart-context/shoppingCartContextTypes";
import { toast } from "react-toastify";
// types
type OrderData = {
    orderItems: product[];
    shippingAddress: ShippingAddressDataType;
    paymentMethod: string;
    totalItemsPrice: number;
    shippingPrice: number;
    taxes: number;
    totalPrice: number;
};

export const postUser = async (
    URL: string,
    orderData: OrderData,
    navigate: NavigateFunction,
    userToken: string | undefined,
    setCartItems: React.Dispatch<React.SetStateAction<product[]>>
) => {
    try {
        const { data } = await axios.post(URL, orderData, {
            headers: {
                authorization: `Bearer ${userToken}`,
            },
        });
        setCartItems([]);
        navigate(`/order/${data.order._id}`);
    } catch (error: any) {
        toast.error(error?.message);
    }
};
