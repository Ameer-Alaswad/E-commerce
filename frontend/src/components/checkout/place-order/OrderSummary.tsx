import { Box, Button, CardContent, Divider, Typography } from "@mui/material";

import Card from "@mui/material/Card";
import { postUser } from "../../../fetchers/postOrder";
import { useNavigate } from "react-router-dom";
import { orderSummaryStyles } from "../styles";
import { calculateCartTotalPrices } from "../utils";
import useAppContext from "../../../hooks/useAppContext";
import useShoppingCartContext from "../../../hooks/useShoppingCartContext";
import useUserAuthContext from "../../../hooks/useUserAuthContext";

const { card, title, itemPrice, divider, bold, box, buttonBox, button } =
    orderSummaryStyles;

export default function OrderSummary() {
    const navigate = useNavigate();


    const {
        shippingAddressData,
        paymentMethod,
    } = useAppContext()

    const {
        userSignedIn
    } = useUserAuthContext()

    const {
        shoppingCartItems,

        setShoppingCartItems,
    } = useShoppingCartContext()

    const {
        totalItemsPrice,
        shippingPrice,
        taxes,
        totalPrice,
    } = calculateCartTotalPrices(shoppingCartItems)

    const orderData = {
        orderItems: shoppingCartItems,
        shippingAddress: shippingAddressData,
        paymentMethod: paymentMethod,
        totalItemsPrice,
        shippingPrice,
        taxes,
        totalPrice,
    };
    const handleOrder = () => {
        postUser(
            "/api/orders",
            orderData,
            navigate,
            userSignedIn?.token,
            setShoppingCartItems
        );
    };

    return (
        <Card sx={ card }>
            <CardContent>
                <Typography sx={ { ...title, ...bold } } variant="h5">
                    Order Summary
                </Typography>
                <Box sx={ box }>
                    <Typography sx={ itemPrice }>Items: ${ totalItemsPrice }</Typography>
                    <Divider sx={ divider } />
                    <Typography sx={ itemPrice }>Shipping: ${ shippingPrice }</Typography>
                    <Divider sx={ divider } />
                    <Typography sx={ itemPrice }>Tax: ${ taxes }</Typography>
                    <Divider sx={ divider } />
                    <Typography sx={ { ...itemPrice, ...bold } }>
                        Total: ${ totalPrice }
                    </Typography>
                    <Divider sx={ divider } />
                </Box>
            </CardContent>
            <Box sx={ buttonBox }>
                <Button onClick={ handleOrder } sx={ button } variant="contained">
                    Place Order
                </Button>
            </Box>
        </Card>
    );
}
