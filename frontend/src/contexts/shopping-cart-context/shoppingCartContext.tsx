// react
import { SettingsInputAntenna } from "@mui/icons-material";
import { createContext, useEffect, useState } from "react";
// types
import {
    product,
    ShoppingCart,
    shoppingCartChildren,
    userSignin,
    ShippingAddressDataType,
    OrderData
} from "./shoppingCartContextTypes";
const addressDataInStorage = JSON.parse(
    localStorage.getItem("shippingCardAddress") || "{}"
);


const paymentMethodInStorage = JSON.parse(
    localStorage.getItem("paymentMethod") || "{}"
);
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
    const [userSignin, setUserSignin] = useState<userSignin | null>(null);
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
