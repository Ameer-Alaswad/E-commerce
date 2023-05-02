// react
import { createContext, useState } from "react";
// types
import {
    product,
    ShoppingCart,
    shoppingCartChildren,
    userSignin,
    ShippingAddressDataType,
    OrderData,
    UserData
} from "./shoppingCartContextTypes";
const addressDataInStorage = JSON.parse(
    localStorage.getItem("shippingCardAddress") || "{}"
);


const paymentMethodInStorage = JSON.parse(
    localStorage.getItem("paymentMethod") || "{}"
);

const UserDataStorage: string | null = localStorage.getItem('userData');
const userData: UserData | null = UserDataStorage ? JSON.parse(UserDataStorage) : null;

export const ShoppingCartContext = createContext({} as ShoppingCart);

export const ShoppingCartProvider = ({ children }: shoppingCartChildren) => {
    const [cartItems, setCartItems] = useState<product[]>([]);
    const [progressStep, setProgressStep] = useState<number>(0);
    const [shippingAddressData, setShippingAddressData] =
        useState<ShippingAddressDataType>(
            addressDataInStorage || {
                fullName: "",
                address: "",
                city: "",
                postalCode: "",
                country: "",
            }
        );
    const [orderData, setOrderData] = useState<OrderData | null>(null)
    const [userSignin, setUserSignin] = useState<userSignin | null>(userData);
    console.log(userSignin);

    const [paymentMethod, setPaymentMethod] = useState<string>(paymentMethodInStorage || "");

    return (
        <ShoppingCartContext.Provider
            value={ {
                cartItems,
                setCartItems,
                userSignin,
                setUserSignin,
                shippingAddressData,
                setShippingAddressData,
                progressStep,
                setProgressStep,
                setPaymentMethod,
                paymentMethod,
                orderData,
                setOrderData

            } }
        >
            { children }
        </ShoppingCartContext.Provider>
    );
};
