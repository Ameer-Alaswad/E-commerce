import { createContext, useState } from "react";
import {
    OrderData,
    OrdersContextTypes,
} from "./Types";
import { ContextChildren } from "../app-context/Types";

export const OrdersContext = createContext({} as OrdersContextTypes);

const OrdersContextProvider = ({ children }: ContextChildren) => {

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
