import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import { ShoppingCartContext } from '../../contexts/shopping-cart-context/shoppingCartContext';
import { Box, Button, Card, CardContent, Divider, Typography } from "@mui/material";

import cartStyles from './cartStyles';
const {
    totalCardStyle,
    buttonContainerStyle,
    buttonStyle,
} = cartStyles;

const CartSummarySection = () => {
    const navigate = useNavigate();
    const { cartItems, userSignin } = useContext(ShoppingCartContext);

    const SHIPPING_PATH = "/shipping";
    const SIGNIN_PATH = "/user/signin";

    const handleProceedToCheckout = () => {
        userSignin ? navigate(SHIPPING_PATH) : navigate(`${SIGNIN_PATH}?redirect=${SHIPPING_PATH}`);
    };

    const calculateTotal = () => {
        const totalItems = cartItems.reduce((a, c) => a + c.quantity, 0);
        const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
        return `Total (${totalItems} items) : $${totalPrice}`;
    };

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
                        { calculateTotal() }
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

    }

    return (
        <>
            { renderCartSummary() }
        </>
    )
}

export default CartSummarySection