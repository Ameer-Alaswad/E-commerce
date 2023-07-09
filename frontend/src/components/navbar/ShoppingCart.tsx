import { useContext } from "react";
import useCustomNavigate from "../../hooks/useCustomNavigate";

import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { ShoppingCartContext } from '../../contexts/shopping-cart-context/shoppingCartContext';
import { SHOPPING_CART_PATH } from "../constants/path";

const ShoppingCart = () => {
    const navigate = useCustomNavigate();

    const shoppingCartContext = useContext(ShoppingCartContext)
    const { cartItems } = shoppingCartContext;

    return (
        <>
            <IconButton
                onClick={ () => navigate(SHOPPING_CART_PATH) }
                size="large"
                aria-label="shopping cart"
                color="inherit"
            >
                <Badge badgeContent={ cartItems?.length } color="error">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
        </>
    )
}

export default ShoppingCart