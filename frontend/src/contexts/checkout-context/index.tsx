import { createContext, useState } from "react";
import {
    CheckoutContextTypes,
    ShippingAddressDataType,
} from "./Types";
import {
    addressDataInStorage,
    initialShippingAddressData,
    paymentMethodInStorage,
} from "../app-context/data";
import { ContextChildren } from "../app-context/Types";
import { PAYMENT_METHOD_PAYBAL } from "../../components/constants/text";

export const CheckoutContext = createContext({} as CheckoutContextTypes);

const CheckoutContextProvider = ({ children }: ContextChildren) => {
    const [shippingAddressData, setShippingAddressData] =
        useState<ShippingAddressDataType>(
            addressDataInStorage || initialShippingAddressData
        );
    const [progressStep, setProgressStep] = useState<number>(0);
    const [paymentMethod, setPaymentMethod] = useState<string>(
        paymentMethodInStorage || PAYMENT_METHOD_PAYBAL
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
