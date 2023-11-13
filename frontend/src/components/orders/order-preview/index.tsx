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
import { API_PAYPAL_KEYS_PATH, API_PLACE_ORDER, SIGNIN_PATH } from "../../constants/path";
import { SIGN_IN_FIRST_ERROR } from "../../constants/errorMessages";

const OrderPreview = () => {
    const navigate = useNavigate();
    const { setOrderData, orderData } = useOrdersContext()
    const { userSignedIn } = useUserAuthContext()

    const userSigned = checkUserLoggedIn(userSignedIn)

    const { id: orderId } = useParams();

    const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();


    useEffect(() => {
        if (!userSigned) {
            navigate(SIGNIN_PATH);
            toast.error(SIGN_IN_FIRST_ERROR);
            return
        }
        if (!orderData?._id) {
            fetchOrder(`${API_PLACE_ORDER}/${orderId}`, userSigned, setOrderData);
        } else {
            const loadPaypalScript = async () => {
                const { data: clientId } = await axios.get(API_PAYPAL_KEYS_PATH, {
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

    const orderPreviewMainContainerStyles = {
        display: "flex",
        margin: "0 auto",
        justifyContent: "space-between",
        marginTop: "120px",
        width: "1000px",
        height: "100vh"
    }
    return (
        <Box
            sx={ orderPreviewMainContainerStyles }
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