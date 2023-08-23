import { Box, Button, CardContent, Divider, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { postUser } from "../../../fetchers/postOrder";
import { useNavigate } from "react-router-dom";
import {
    divider,
    itemsPriceStyles,
    orderSummaryContainerStyles,
    orderSummaryTitleStyles,
    placeOrderButtonStyles,
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
    PLACE_ORDER_TEXT,
    SHIPPING_TITLE,
    TAX_TEXT,
    TOTAL_TEXT,
} from "../../constants/text";
import { API_PLACE_ORDER } from "../../constants/path";

export default function OrderSummary() {
    const navigate = useNavigate();
    const { shippingAddressData, paymentMethod } = useCheckoutContext();
    const { userSignedIn } = useUserAuthContext();
    const {
        shoppingCartItems,

        setShoppingCartItems,
    } = useShoppingCartContext();

    const { totalItemsPrice, shippingPrice, taxes, totalPrice } =
        calculateCartTotalPrices(shoppingCartItems);

    const orderData = {
        orderItems: shoppingCartItems,
        shippingAddress: shippingAddressData,
        paymentMethod: paymentMethod,
        totalItemsPrice,
        shippingPrice,
        taxes,
        totalPrice,
    };
    const token = userSignedIn?.token;

    const handlePlacingOrder = () => {
        postUser({
            URL: API_PLACE_ORDER,
            orderData,
            navigate,
            userToken: token,
            setShoppingCartItems,
        });
    };

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
                    <Box sx={ placeOrderButtonStyles }>
                        <Button
                            onClick={ handlePlacingOrder }
                            sx={ placeOrderButtonStyles }
                            variant="contained"
                        >
                            { PLACE_ORDER_TEXT }
                        </Button>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}
