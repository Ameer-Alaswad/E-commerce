import { createContext, useState } from "react";
import {
    CheckoutContextChildren,
    OrderData,
    OrdersContextTypes,
} from "./Types";

export const OrdersContext = createContext({} as OrdersContextTypes);

const OrdersContextProvider = ({ children }: CheckoutContextChildren) => {

    const [orderData, setOrderData] = useState<OrderData | null>(null);

    return (
        <OrdersContext.Provider
            value={ {
                orderData,
                setOrderData,
            } }
        >
            { children }
        </OrdersContext.Provider>
    );
};

export default OrdersContextProvider;
