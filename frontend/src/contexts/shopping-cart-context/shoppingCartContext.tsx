// react
import { createContext, useEffect, useState } from "react";
// types
import {
    product,
    ShoppingCart,
    shoppingCartChildren,
    userSignin,
    ShippingAddressDataType,
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
    const [shippingAddresData, setShippingAddresData] =
        useState<ShippingAddressDataType>(
            addressDataInStorage || {
                fullName: "",
                address: "",
                city: "",
                postalCode: "",
                country: "",
            }
        );
    const [userSignin, setUserSignin] = useState<userSignin | null>(null);
    const [paymentMethod, setPaymentMethod] = useState<string>(paymentMethodInStorage || "");

    return (
        <ShoppingCartContext.Provider
            value={ {
                cartItems,
                setCartItems,
                userSignin,
                setUserSignin,
                shippingAddresData,
                setShippingAddresData,
                progressStep,
                setProgressStep,
                setPaymentMethod,
                paymentMethod
            } }
        >
            { children }
        </ShoppingCartContext.Provider>
    );
};
