// External library
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
// Internal component
import Loading from "../../Loading";
import { Box } from "@mui/material";
// Component
import OrdersTable from "./orders-table";
import { OrderHistory } from "./OrdersTypes";
import { fetchOrderHistory } from "../../../fetchers/fetchOrdersHistory";
import { useNavigate } from "react-router-dom";
import useAppContext from "../../../hooks/useAppContext";

const orderHistoryContainer = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const OrdersHistory = () => {

    const { userSignedIn } = useAppContext()
    const navigate = useNavigate();
    const [orderHistory, setOrderHistory] = useState<OrderHistory[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const userSignedRef = useRef<any>(null);

    const user: any = localStorage.getItem("userData");
    const parsedUser = JSON.parse(user);
    let userSigned = userSignedIn;
    !userSignedIn ? (userSigned = parsedUser) : (userSigned = userSignedIn);

    useEffect(() => {
        if (!userSigned) {
            navigate("/user/signin");
            toast.error("Sign in first !");
        }
    }, [userSigned, navigate]);

    useEffect(() => {
        userSignedRef.current = userSigned;
    }, [userSigned]);

    useEffect(() => {
        fetchOrderHistory(
            setLoading,
            `/api/orders/mine`,
            userSignedRef.current
        ).then((orderHistory) => {
            setOrderHistory(orderHistory);
        });
    }, [userSignedRef]);

    return (
        <Box sx={ orderHistoryContainer }>
            { loading ? <Loading /> : <OrdersTable orderHistory={ orderHistory } /> }
        </Box>
    );
};

export default OrdersHistory;
