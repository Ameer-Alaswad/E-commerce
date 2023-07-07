import { AppBar, Box, Toolbar, IconButton, Typography } from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreVert";

import { Link } from "react-router-dom";

import ShoppingCart from "./ShoppingCart";
import UserOptionsMobileMenu from "./UserOptionsMobileMenu";
import UserOptionsMenu from "./UserOptionsMenu";
import useProfileMenu from "./useProfileMenu";
import ProductSearch from "./ProductSearch";

import { linkToLanding, linkStyles, cartAndUserMenuStyles, mobileMenuStyles } from "./styles";
import IsUserOptionsMenuOpen from "./IsUserOptionsMenuOpen";
import IsUserOptionsMobileMenuOpen from "./IsUserOptionsMobileMenuOpen";

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
                        <IsUserOptionsMenuOpen />
                        <UserOptionsMenu { ...UserOptionsMenuProps } />
                    </Box>
                    <Box sx={ { display: { ...mobileMenuStyles } } }>
                        < IsUserOptionsMobileMenuOpen handleMobileMenuOpen={ handleMobileMenuOpen } />
                    </Box>
                </Toolbar>
            </AppBar>
            <UserOptionsMobileMenu { ...UserOptionsMobileMenuProps } />
        </div>
    );
}
