import { Menu, MenuItem } from '@mui/material';

interface MenuProfileProps {
    anchorEl: HTMLElement | null;
    isMenuOpen: boolean;
    handleMenuClose: () => void;
    handleSignOut: () => void;
    navigate: (path: string) => void;
    menuId: string;
    getMenuClickHandler: (path: string) => () => void

}

const MenuProfile: React.FC<MenuProfileProps> = ({
    anchorEl,
    isMenuOpen,
    handleMenuClose,
    handleSignOut,
    menuId,
    getMenuClickHandler

}) => {

    return (
        <Menu
            anchorEl={ anchorEl }
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

export default MenuProfile;
