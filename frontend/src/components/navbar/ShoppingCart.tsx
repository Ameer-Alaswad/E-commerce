import { useContext } from "react";

import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useNavigation from "../../hooks/useNavigation"
import { ShoppingCartContext } from '../../contexts/shopping-cart-context/shoppingCartContext';

const ShoppingCart = () => {
    const { navigateShoppingCart } = useNavigation();

    const shoppingCartContext = useContext(ShoppingCartContext)
    const { cartItems } = shoppingCartContext;

    return (
        <>
            <IconButton
                onClick={ navigateShoppingCart }
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