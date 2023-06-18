import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ShoppingCartContext } from "../../contexts/shopping-cart-context/shoppingCartContext";
import { Card, CardContent, Typography } from "@mui/material";

import cartStyles from "./CartStyles";
import ItemsList from "../checkout/place-order/order-itmes/ItemsList";
import EmptyCartMessage from "./EmptyCartMessage";

const { cartCardStyle } = cartStyles;

const CartItemsSection = () => {
    const navigate = useNavigate();
    const { cartItems } = useContext(ShoppingCartContext);

    const navigateHome = () => navigate("/");

    const renderCartContent = () => {
        const isCartEmpty = cartItems.length === 0;

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
