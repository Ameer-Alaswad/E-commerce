import { useContext } from "react";

import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { ShoppingCartContext } from '../../contexts/shopping-cart-context/shoppingCartContext';
import { SHOPPING_CART_PATH } from "../constants/path";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
    const navigate = useNavigate();

    const { cartItems } = useContext(ShoppingCartContext)

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