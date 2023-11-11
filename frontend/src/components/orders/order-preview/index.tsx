import { Box } from "@mui/system";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchOrder } from "../../../fetchers/fetchOrder";
import { usePayPalScriptReducer } from "@paypal/react-paypal-js";
import axios from "axios";
import useUserAuthContext from "../../../hooks/context/useUserAuthContext";
import useOrdersContext from "../../../hooks/context/useOrdersContext";
import { checkUserLoggedIn } from "../../../utils/utils";
import Title from "./Title";
import ShippingData from "./ShippingData";
import PaymentUi from "./PaymentUi";
import ProductsList from "./ProductsList";
import OrderSummary from "./OrderSummary";

const OrderPreview = () => {
    const navigate = useNavigate();
    const { setOrderData, orderData } = useOrdersContext()
    const { userSignedIn } = useUserAuthContext()

    const userSigned = checkUserLoggedIn(userSignedIn)

    const { id: orderId } = useParams();

    const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();


    useEffect(() => {
        if (!userSigned) {
            navigate("/user/signin");
            setTimeout(() => {
                toast.error("Sign in first !");
            }, 100);
        }
        if (!orderData?._id) {
            fetchOrder(`/api/orders/${orderId}`, userSigned, setOrderData);
        } else {
            const loadPaypalScript = async () => {
                const { data: clientId } = await axios.get("/api/keys/paypal", {
                    headers: { authorization: `Bearer ${userSigned?.token}` },
                });
                paypalDispatch({
                    type: "resetOptions",
                    value: {
                        "client-id": clientId,
                        currency: "USD",
                    },
                });
                paypalDispatch({
                    type: "setLoadingStatus",
                    value: "pending" as any,
                });
            };
            loadPaypalScript();
        }
    }, [userSigned, navigate, orderId, setOrderData, paypalDispatch, orderData]);

    return (
        <Box
            sx={ {
                display: "flex",
                margin: "0 auto",
                justifyContent: "space-between",
                marginTop: "120px",
                width: "1000px",
                height: "100vh"
            } }
        >
            { orderData && (
                <Box id="order-preview-container">
                    <Title />
                    <ShippingData />
                    <PaymentUi />
                    <ProductsList />
                </Box>
            ) }
            <OrderSummary />
        </Box>
    );
};

export default OrderPreview;