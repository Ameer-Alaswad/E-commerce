// React 
import { useContext } from "react";
import { useNavigate } from "react-router";
// Material UI 
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useMediaQuery from '@mui/material/useMediaQuery';
// Context 
import { ShoppingCartContext } from '../../contexts/shopping-cart-context/shoppingCartContext';

const ShoppingCart = () => {
    const navigate = useNavigate();
    const matches = useMediaQuery('(max-width:900px)');
    const shoppingCartContext = useContext(ShoppingCartContext)
    const { cartItems } = shoppingCartContext;

    return (
        <>
            <IconButton
                onClick={ () => navigate(`/cart`) }
                size="large"
                aria-label="shopping cart"
                color="inherit"
            >
                <Badge badgeContent={ cartItems.length } color="error">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
            { matches && <p>Cart</p> }
        </>
    )
}

export default ShoppingCart