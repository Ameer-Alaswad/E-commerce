import { Box, CardContent, Divider, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { postUser } from "../../../fetchers/postOrder";
import { useNavigate } from "react-router-dom";
import {
    divider,
    itemsPriceStyles,
    orderSummaryContainerStyles,
    orderSummaryTitleStyles,
    placeOrderTitleStyles,
    pricesContainerStyles,
    shippingInfoStyles,
    taxStyles,
    totalPriceStyles,
} from "../styles";
import { calculateCartTotalPrices } from "../utils";
import useShoppingCartContext from "../../../hooks/context/useShoppingCartContext";
import useUserAuthContext from "../../../hooks/context/useUserAuthContext";
import useCheckoutContext from "../../../hooks/context/useCheckoutContext";
import {
    CURRENCY_DOLLAR,
    ITEMS_TEXT,
    ORDER_SUMMARY_TITLE,
    PLACE_ORDER_NOW_TEXT,
    SHIPPING_TITLE,
    TAX_TEXT,
    TOTAL_TEXT,
} from "../../constants/text";
import { API_PLACE_ORDER } from "../../constants/path";
import useOrdersContext from "../../../hooks/context/useOrdersContext";
import { toast } from "react-toastify";
import { PayPalButtons } from "@paypal/react-paypal-js";


export default function OrderSummary() {
    const { userSignedIn } = useUserAuthContext()

    const { setOrderData } = useOrdersContext()

    const navigate = useNavigate();
    const { shippingAddressData, paymentMethod } = useCheckoutContext();

    const {
        shoppingCartItems,

        setShoppingCartItems,
    } = useShoppingCartContext();
    const { totalItemsPrice, shippingPrice, taxes, totalPrice } =
        calculateCartTotalPrices(shoppingCartItems);

    const orderInfo = {
        orderItems: shoppingCartItems,
        shippingAddress: shippingAddressData,
        paymentMethod: paymentMethod,
        totalItemsPrice,
        shippingPrice,
        taxes,
        totalPrice,
        isPaid: true
    };
    const token = userSignedIn?.token;

    const createOrder = (data: any, actions: any) => {
        console.log(totalPrice);

        return actions.order
            .create({
                purchase_units: [
                    {
                        amount: { value: totalPrice },

                    },
                ],
            })
            .then((orderId: string) => {
                return orderId;
            });
    };

    const onApprove = (data: any, actions: any) => {
        return actions.order.capture().then(async (details: any) => {
            postUser({
                URL: API_PLACE_ORDER,
                orderInfo,
                navigate,
                userToken: token,
                setShoppingCartItems,
                setOrderData
            });
        });
    };
    const onError = (err: any) => {
        toast.error(err)
    }

    return (
        <Card sx={ orderSummaryContainerStyles }>
            <CardContent>
                <Typography
                    sx={ orderSummaryTitleStyles }
                    variant="h5"
                    fontWeight="fontWeightBold"
                >
                    { ORDER_SUMMARY_TITLE }
                </Typography>
                <Box sx={ pricesContainerStyles }>
                    <Typography sx={ itemsPriceStyles }>
                        { ITEMS_TEXT } : { CURRENCY_DOLLAR }
                        { totalItemsPrice }
                    </Typography>
                    <Divider sx={ divider } />
                    <Typography sx={ shippingInfoStyles }>
                        { SHIPPING_TITLE } : { CURRENCY_DOLLAR }
                        { shippingPrice }
                    </Typography>
                    <Divider sx={ divider } />
                    <Typography sx={ taxStyles }>
                        { TAX_TEXT } : { CURRENCY_DOLLAR }
                        { taxes }
                    </Typography>
                    <Divider sx={ divider } />
                    <Typography sx={ totalPriceStyles } fontWeight="fontWeightBold">
                        { TOTAL_TEXT }: { CURRENCY_DOLLAR }
                        { totalPrice }
                    </Typography>
                    <Divider sx={ divider } />
                    <Typography
                        sx={ placeOrderTitleStyles }
                    >
                        { PLACE_ORDER_NOW_TEXT }
                    </Typography>
                    <div>
                        <PayPalButtons
                            createOrder={ createOrder }
                            onApprove={ onApprove }
                            onError={ onError }
                            fundingSource="paypal"
                        ></PayPalButtons>
                    </div>
                </Box>
            </CardContent>
        </Card>
    );
}
