import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import ShoppingCart from './ShoppingCart';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ViewListIcon from '@mui/icons-material/ViewList';

interface MobileMenuProps {
    userOptionsOpenMobile: null | HTMLElement;
    isMobileMenuOpen: boolean;
    handleMobileMenuClose: () => void;
    handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
    getMenuClickHandler: (path: string) => () => void;
}

const UserOptionsMobileMenu: React.FC<MobileMenuProps> = ({
    userOptionsOpenMobile,
    isMobileMenuOpen,
    handleMobileMenuClose,
    getMenuClickHandler,
    handleProfileMenuOpen,
}) => {
    return (
        <Menu
            anchorEl={ userOptionsOpenMobile }
            anchorOrigin={ {
                vertical: 'top',
                horizontal: 'right',
            } }
            id="primary-search-account-menu-mobile"
            keepMounted
            transformOrigin={ {
                vertical: 'top',
                horizontal: 'right',
            } }
            open={ isMobileMenuOpen }
            onClose={ handleMobileMenuClose }
        >
            <MenuItem>
                <ShoppingCart />
            </MenuItem>
            <MenuItem onClick={ getMenuClickHandler('/user/update') }>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                    onClick={ handleProfileMenuOpen }
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
            <MenuItem onClick={ getMenuClickHandler('/ordershistory') }>
                <IconButton
                    size="large"
                    aria-label="shopping cart"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <ViewListIcon />
                </IconButton>
                <p>My Orders</p>
            </MenuItem>
        </Menu>
    );
};

export default UserOptionsMobileMenu;
