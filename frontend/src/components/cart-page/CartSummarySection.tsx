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
import useShoppingCartContext from "../../hooks/useShoppingCartContext";
import useUserAuthContext from "../../hooks/useUserAuthContext";

const CartSummarySection = () => {
    const navigate = useNavigate();
    const { shoppingCartItems } = useShoppingCartContext()
    const { userSignedIn } = useUserAuthContext()

    const handleProceedToCheckout = () => {
        userSignedIn
            ? navigate(SHIPPING_PATH)
            : navigate(`${SIGNIN_PATH}?redirect=${SHIPPING_PATH}`);
    };

    const { totalItemsPrice: calculateTotalItemsPrice } = useMemo(() => {
        return calculateCartTotalPrices(shoppingCartItems);
    }, [shoppingCartItems]);

    const calculateTotalItems = useMemo(() => {
        return shoppingCartItems.reduce((a, c) => a + c.quantity, 0);
    }, [shoppingCartItems]);

    const totalPriceAndItemsText = `Total (${calculateTotalItems} items) : ${CURRENCY_DOLLAR}${calculateTotalItemsPrice}`;

    const renderCartSummary = () => {
        return shoppingCartItems?.length !== 0 ? (
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
