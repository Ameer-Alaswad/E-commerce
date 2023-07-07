import { Menu, MenuItem } from '@mui/material';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../contexts/shopping-cart-context/shoppingCartContext';
import { useNavigate } from 'react-router-dom';


const UserOptionsMenu = () => {
    const navigate = useNavigate()
    const shoppingCartContext = useContext(ShoppingCartContext);
    const { userOptionsOpen, isMenuOpen, handleMenuClose, getMenuClickHandler, handleSignOut } = shoppingCartContext;
    const menuId = "primary-search-account-menu";

    return (
        <Menu
            anchorEl={ userOptionsOpen }
            anchorOrigin={ {
                vertical: 'top',
                horizontal: 'right',
            } }
            id={ menuId }
            keepMounted
            transformOrigin={ {
                vertical: 'top',
                horizontal: 'right',
            } }
            open={ isMenuOpen }
            onClose={ handleMenuClose }
        >
            <MenuItem onClick={ getMenuClickHandler("/user/update", navigate) }>Profile</MenuItem>
            <MenuItem onClick={ getMenuClickHandler('/ordershistory', navigate) }>My Orders</MenuItem>
            <MenuItem onClick={ () => handleSignOut(navigate) }>Sign out</MenuItem>
        </Menu>
    );
};

export default UserOptionsMenu;
