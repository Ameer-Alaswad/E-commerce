import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

import { Box } from "@mui/material";

import OrdersTable from "./orders-table";
import { OrderHistory } from "./OrdersTypes";
import { fetchOrderHistory } from "../../../fetchers/fetchOrdersHistory";
import { useNavigate } from "react-router-dom";
import useUserAuthContext from "../../../hooks/context/useUserAuthContext";
import AnimatedLoadingIcon from "../../AnimatedLoadingIcon";
import { API_ORDERS_MINE_PATH, SIGNIN_PATH } from "../../constants/path";
import { SIGN_IN_FIRST_ERROR } from "../../constants/errorMessages";
import { checkUserLoggedIn } from "../../../utils/utils";

const orderHistoryContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const OrdersHistory = () => {

    const { userSignedIn } = useUserAuthContext()
    const navigate = useNavigate();
    const [orderHistory, setOrderHistory] = useState<OrderHistory[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const userSignedRef = useRef<any>(null);

    const userSigned = checkUserLoggedIn(userSignedIn)

    useEffect(() => {
        if (!userSigned) {
            navigate(SIGNIN_PATH);
            toast.error(SIGN_IN_FIRST_ERROR);
        }
    }, [userSigned, navigate]);

    useEffect(() => {
        userSignedRef.current = userSigned;
    }, [userSigned]);

    useEffect(() => {
        fetchOrderHistory(
            setLoading,
            API_ORDERS_MINE_PATH,
            userSignedRef.current
        ).then((orderHistory) => {
            setOrderHistory(orderHistory);
        });
    }, [userSignedRef]);

    return (
        <Box sx={ orderHistoryContainer }>
            { loading ? <AnimatedLoadingIcon /> : <OrdersTable orderHistory={ orderHistory } /> }
        </Box>
    );
};

export default OrdersHistory;
