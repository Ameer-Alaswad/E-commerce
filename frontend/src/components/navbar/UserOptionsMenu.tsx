import { Menu, MenuItem } from '@mui/material';

interface MenuProfileProps {
    userOptionsOpen: HTMLElement | null;
    isMenuOpen: boolean;
    handleMenuClose: () => void;
    handleSignOut: () => void;
    navigate: (path: string) => void;
    getMenuClickHandler: (path: string) => () => void

}

const UserOptionsMenu: React.FC<MenuProfileProps> = ({
    userOptionsOpen,
    isMenuOpen,
    handleMenuClose,
    handleSignOut,
    getMenuClickHandler

}) => {

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
            <MenuItem onClick={ getMenuClickHandler("/user/update") }>Profile</MenuItem>
            <MenuItem onClick={ getMenuClickHandler('/ordershistory') }>My Orders</MenuItem>
            <MenuItem onClick={ handleSignOut }>Sign out</MenuItem>
        </Menu>
    );
};

export default UserOptionsMenu;
