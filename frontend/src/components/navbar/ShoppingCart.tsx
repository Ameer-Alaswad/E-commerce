import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { SHOPPING_CART_PATH } from "../constants/path";
import { useNavigate } from "react-router-dom";
import useShoppingCartContext from '../../hooks/context/useShoppingCartContext';

const ShoppingCart = () => {
    const navigate = useNavigate();

    const { shoppingCartItems } = useShoppingCartContext()

    return (
        <>
            <IconButton
                onClick={ () => navigate(SHOPPING_CART_PATH) }
                size="large"
                aria-label="shopping cart"
                sx={ { color: "#0000CD" } }
            >
                <Badge badgeContent={ shoppingCartItems?.length } color="error">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
        </>
    )
}

export default ShoppingCart