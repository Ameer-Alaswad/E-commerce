// axios
import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import {
    Product,
    ShippingAddressDataType,
} from "../contexts/app-context/AppContextTypes";
import { toast } from "react-toastify";
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

export const postUser = async (
    URL: string,
    orderData: OrderData,
    navigate: NavigateFunction,
    userToken: string | undefined,
    setShoppingCartItems: React.Dispatch<React.SetStateAction<Product[]>>
) => {
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
