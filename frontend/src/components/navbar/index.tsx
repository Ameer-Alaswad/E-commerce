import { AppBar, Box, Toolbar, IconButton, Typography } from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreVert";

import { Link } from "react-router-dom";

import ShoppingCart from "./ShoppingCart";
import UserOptionsMobileMenu from "./UserOptionsMobileMenu";
import UserOptionsMenu from "./UserOptionsMenu";
import useProfileMenu from "./useProfileMenu";
import UserAccountMenu from "./UserAccountMenu";
import ProductSearch from "./ProductSearch";

import { linkToLanding, linkStyles, cartAndUserMenuStyles, mobileMenuStyles } from "./styles";

export default function PrimarySearchAppBar() {
    const {
        userOptionsOpen,
        userOptionsOpenMobile,
        isMenuOpen,
        isMobileMenuOpen,
        handleProfileMenuOpen,
        handleMobileMenuClose,
        handleMenuClose,
        handleMobileMenuOpen,
        handleSignOut,
        navigate,
        userSignin,
        getMenuClickHandler,
    } = useProfileMenu();


    const mobileMenuId = "primary-search-account-menu-mobile";

    const UserOptionsMenuProps = {
        userOptionsOpen,
        isMenuOpen,
        handleMenuClose,
        handleSignOut,
        navigate,
        getMenuClickHandler,
    };
    const UserOptionsMobileMenuProps = {
        userOptionsOpenMobile,
        isMobileMenuOpen,
        handleMobileMenuClose,
        handleProfileMenuOpen,
        getMenuClickHandler,
    };
    const UserAccountMenuProps = { userSignin, handleProfileMenuOpen };

    return (
        <div id="header-container">
            <AppBar position="fixed">
                <Toolbar>
                    <Link to="/" style={ linkToLanding }>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={ { display: { ...linkStyles } } }
                        >
                            E-commerce
                        </Typography>
                    </Link>
                    <ProductSearch />
                    <Box sx={ { flexGrow: 1 } } />
                    <Box sx={ { display: { ...cartAndUserMenuStyles } } }>
                        <ShoppingCart />
                        <UserAccountMenu { ...UserAccountMenuProps } />
                    </Box>
                    <Box sx={ { display: { ...mobileMenuStyles } } }>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={ mobileMenuId }
                            aria-haspopup="true"
                            onClick={ handleMobileMenuOpen }
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <UserOptionsMobileMenu { ...UserOptionsMobileMenuProps } />
            <UserOptionsMenu { ...UserOptionsMenuProps } />
        </div>
    );
}
