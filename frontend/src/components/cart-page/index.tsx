// context
import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/shopping-cart-context/shoppingCartContext";
// Material UI
import { useNavigate } from "react-router-dom";
import {
    Card,
    CardContent,
    Divider,
    Box,
    Typography,
    Button,
} from "@mui/material";
// styles
import cartStyles from "./CartStyles";
import CartItemsSection from "./CartItemsSection";
const {
    containerStyle,
    totalCardStyle,
    buttonContainerStyle,
    buttonStyle,
    continueShoppingButtonContainerStyle,
} = cartStyles;

const CartPage = () => {
    // Variables names from context need to be changed, this will be done in a separate branch later. 
    const navigate = useNavigate();
    const { cartItems, userSignin } = useContext(ShoppingCartContext);

    const handleProceedToCheckout = () => {
        userSignin
            ? navigate("/shipping")
            : navigate("/user/signin?redirect=/shipping");
    };

    const navigateHome = () => navigate("/");

    return (
        <div id="cart-page-container" style={ containerStyle }>
            <CartItemsSection />
            { cartItems?.length !== 0 && (
                <Card id="total-card" sx={ totalCardStyle }>
                    <CardContent>
                        <Typography
                            id="total-price-label"
                            sx={ { marginBottom: "10px" } }
                            variant="h5"
                            fontWeight="fontWeightBold"
                        >
                            Total ({ cartItems.reduce((a, c) => a + c.quantity, 0) } items) : $
                            { cartItems.reduce((a, c) => a + c.price * c.quantity, 0) }
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
            ) }
            { cartItems?.length !== 0 && (
                <Box
                    id="continue-shopping-button-container"
                    sx={ continueShoppingButtonContainerStyle }
                >
                    <Button
                        onClick={ navigateHome }
                        id="continue-shopping-button"
                        variant="contained"
                    >
                        Continue Shopping!
                    </Button>
                </Box>
            ) }
        </div>
    );
};

export default CartPage;
