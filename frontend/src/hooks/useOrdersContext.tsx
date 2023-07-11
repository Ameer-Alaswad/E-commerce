import { useContext } from "react";
import { OrdersContext } from "../contexts/orders-context";

const useOrdersContext = () => {
    const { orderData, setOrderData } = useContext(OrdersContext);
    return { orderData, setOrderData };
};

export default useOrdersContext;
