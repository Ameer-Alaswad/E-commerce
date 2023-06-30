import { AppBar, Box, Toolbar, IconButton, Typography } from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreVert";

import { Link } from "react-router-dom";

import ShoppingCart from "./ShoppingCart";
import UserOptionsMobileMenu from "./UserOptionsMobileMenu";
import UserOptionsMenu from "./UserOptionsMenu";
import useProfileMenu from "./useProfileMenu";
import UserAccountMenu from "./UserAccountMenu";
import ProductSearch from "./ProductSearch";

import { headerStyles } from "./styles";
const { linkToLanding } = headerStyles;

export default function PrimarySearchAppBar() {
    const {
        anchorEl,
        mobileMoreAnchorEl,
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

    const menuId = "primary-search-account-menu";

    const mobileMenuId = "primary-search-account-menu-mobile";

    const UserOptionsMenuProps = {
        anchorEl,
        isMenuOpen,
        handleMenuClose,
        handleSignOut,
        navigate,
        menuId,
        getMenuClickHandler,
    };
    const UserOptionsMobileMenuProps = {
        mobileMoreAnchorEl,
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
                            sx={ { display: { xs: "none", sm: "block" } } }
                        >
                            E-commerce
                        </Typography>
                    </Link>
                    <ProductSearch />
                    <Box sx={ { flexGrow: 1 } } />
                    <Box sx={ { display: { xs: "none", md: "flex" } } }>
                        <ShoppingCart />
                        <UserAccountMenu { ...UserAccountMenuProps } />
                    </Box>
                    <Box sx={ { display: { xs: "flex", md: "none" } } }>
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
