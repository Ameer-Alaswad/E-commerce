import { createContext, useState } from "react";
import {
    CheckoutContextChildren,
    CheckoutContextTypes,
    ShippingAddressDataType,
} from "./Types";
import {
    addressDataInStorage,
    initialShippingAddressData,
    paymentMethodInStorage,
} from "../app-context/AppContextData";

export const CheckoutContext = createContext({} as CheckoutContextTypes);

const CheckoutContextProvider = ({ children }: CheckoutContextChildren) => {
    const [shippingAddressData, setShippingAddressData] =
        useState<ShippingAddressDataType>(
            addressDataInStorage || initialShippingAddressData
        );
    const [progressStep, setProgressStep] = useState<number>(0);
    const [paymentMethod, setPaymentMethod] = useState<string>(
        paymentMethodInStorage || ""
    );
    return (
        <CheckoutContext.Provider
            value={ {
                shippingAddressData,
                setShippingAddressData,
                progressStep,
                setProgressStep,
                paymentMethod,
                setPaymentMethod,
            } }
        >
            { children }
        </CheckoutContext.Provider>
    );
};

export default CheckoutContextProvider;
