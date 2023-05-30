import { Menu, MenuItem } from '@mui/material';

interface MenuProfileProps {
    anchorEl: HTMLElement | null;
    isMenuOpen: boolean;
    handleMenuClose: () => void;
    handleSignOut: () => void;
    navigate: (path: string) => void;
    menuId: string;
}

const MenuProfile: React.FC<MenuProfileProps> = ({
    anchorEl,
    isMenuOpen,
    handleMenuClose,
    handleSignOut,
    navigate,
    menuId,
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
            <MenuItem onClick={ handleMenuClose }>Profile</MenuItem>
            <MenuItem onClick={ handleMenuClose }>My account</MenuItem>
            <MenuItem onClick={ () => navigate('/ordershistory') }>My Orders</MenuItem>
            <MenuItem onClick={ handleSignOut }>Sign out</MenuItem>
        </Menu>
    );
};

export default MenuProfile;
