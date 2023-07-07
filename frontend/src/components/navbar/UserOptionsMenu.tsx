import { Menu, MenuItem } from '@mui/material';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../contexts/shopping-cart-context/shoppingCartContext';
import { useNavigate } from 'react-router-dom';

interface MenuProfileProps {
    userOptionsOpen: HTMLElement | null;
    isMenuOpen: boolean;
    handleMenuClose: () => void;
    handleSignOut: () => void;
    navigate: (path: string) => void;
    getMenuClickHandler: (path: string) => () => void

}

const UserOptionsMenu: React.FC<MenuProfileProps> = ({

    handleSignOut,

}) => {
    const navigate = useNavigate()
    const shoppingCartContext = useContext(ShoppingCartContext);
    const { userOptionsOpen, isMenuOpen, handleMenuClose, getMenuClickHandler } = shoppingCartContext;
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
            <MenuItem onClick={ handleSignOut }>Sign out</MenuItem>
        </Menu>
    );
};

export default UserOptionsMenu;
