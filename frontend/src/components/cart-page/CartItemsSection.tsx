import { useNavigate } from "react-router-dom";
import { CardContent, Typography, Paper } from "@mui/material";
import { cartCardStyle } from "./cartStyles";
import ItemsList from "../checkout/place-order/order-itmes/ItemsList";
import EmptyCartMessage from "./EmptyCartMessage";
import { HOME_PATH } from "../constants/path";
import useShoppingCartContext from "../../hooks/context/useShoppingCartContext";
import { SHOPPING_CART_TITLE } from "../constants/text";

const CartItemsSection = () => {
    const navigate = useNavigate();
    const { shoppingCartItems } = useShoppingCartContext();

    const navigateHome = () => navigate(HOME_PATH);

    const renderCartContent = () => {
        const isCartEmpty = shoppingCartItems?.length === 0;

        return isCartEmpty ? (
            <EmptyCartMessage navigateHome={ navigateHome } />
        ) : (
            <Paper elevation={ 3 } sx={ cartCardStyle }>
                <Typography gutterBottom variant="h4" component="div" sx={ { padding: "1rem" } }>
                    { SHOPPING_CART_TITLE }
                </Typography>
                <CardContent  >
                    <ItemsList />
                </CardContent>
            </Paper>
        );
    };

    return <>{ renderCartContent() }</>;
};

export default CartItemsSection;
