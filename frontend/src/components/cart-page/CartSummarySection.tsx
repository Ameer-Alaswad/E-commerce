// This component requires refactoring 
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";


import {
    Box,
    Button,
    Card,
    CardContent,
    Divider,
    Typography,
} from "@mui/material";

import {
    totalCardStyle,
    buttonContainerStyle,
    buttonStyle,
} from "./cartStyles";
import { SHIPPING_PATH, SIGNIN_PATH } from "../constants/path";
import { calculateCartTotalPrices } from "../checkout/utils";
import { CURRENCY_DOLLAR } from "../constants/text";
import useAppContext from "../../hooks/useAppContext";

const CartSummarySection = () => {
    const navigate = useNavigate();
    const { cartItems, userSignedIn } = useAppContext()

    const handleProceedToCheckout = () => {
        userSignedIn
            ? navigate(SHIPPING_PATH)
            : navigate(`${SIGNIN_PATH}?redirect=${SHIPPING_PATH}`);
    };

    const { totalItemsPrice: calculateTotalItemsPrice } = useMemo(() => {
        return calculateCartTotalPrices(cartItems);
    }, [cartItems]);

    const calculateTotalItems = useMemo(() => {
        return cartItems.reduce((a, c) => a + c.quantity, 0);
    }, [cartItems]);

    const totalPriceAndItemsText = `Total (${calculateTotalItems} items) : ${CURRENCY_DOLLAR}${calculateTotalItemsPrice}`;

    const renderCartSummary = () => {
        return cartItems?.length !== 0 ? (
            <Card id="total-card" sx={ totalCardStyle }>
                <CardContent>
                    <Typography
                        id="total-price-label"
                        sx={ { marginBottom: "10px" } }
                        variant="h5"
                        fontWeight="fontWeightBold"
                    >
                        { totalPriceAndItemsText }
                    </Typography>
                    <Divider />
                </CardContent>
                <Box id="checkout-button-container" sx={ buttonContainerStyle }>
                    <Button
                        onClick={ handleProceedToCheckout }
                        sx={ buttonStyle }
                        variant="contained"
                        id="checkout-button"
                    >
                        Proceed to Checkout
                    </Button>
                </Box>
            </Card>
        ) : null;
    };

    return <>{ renderCartSummary() }</>;
};

export default CartSummarySection;
