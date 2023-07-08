import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ShoppingCartContext } from "../../contexts/shopping-cart-context/shoppingCartContext";
import { Card, CardContent, Typography } from "@mui/material";

import { cartCardStyle } from "./cartStyles";
import ItemsList from "../checkout/place-order/order-itmes/ItemsList";
import EmptyCartMessage from "./EmptyCartMessage";
import { HOME_PATH } from "../constants/path";


const CartItemsSection = () => {
    const navigate = useNavigate();
    const { cartItems } = useContext(ShoppingCartContext);

    const navigateHome = () => navigate(HOME_PATH);

    const renderCartContent = () => {
        const isCartEmpty = cartItems?.length === 0;

        return isCartEmpty ? (
            <EmptyCartMessage navigateHome={ navigateHome } />
        ) : (
            <Card id="cart-card" sx={ cartCardStyle }>
                <Typography id="cart-title" gutterBottom variant="h4" component="div">
                    Shopping Cart
                </Typography>
                <CardContent>
                    <Typography
                        id="cart-items-label"
                        sx={ { marginBottom: "10px" } }
                        fontWeight="fontWeightBold"
                    >
                        Items
                    </Typography>
                    <ItemsList />
                </CardContent>
            </Card>
        );
    };

    return (
        <>
            { renderCartContent() }
        </>
    )
};

export default CartItemsSection;
