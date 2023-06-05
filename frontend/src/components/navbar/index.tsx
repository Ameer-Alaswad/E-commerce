import { AppBar, Box, Toolbar, IconButton, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";

import { Link, useLocation } from "react-router-dom";

import ShoppingCart from "./ShoppingCart";
import { Search, SearchIconWrapper, StyledInputBase } from "./MuiComponents";
import MobileMenu from "./MobileProfileMenu";
import useProfileMenu from "./useProfileMenu";
import ProfileMenu from "./ProfileMenu";
import UserMenu from "./UserMenu";
import { headerStyles } from "./styles";

const { linkToLanding } = headerStyles

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
        getMenuClickHandler
    } = useProfileMenu();

    const menuId = "primary-search-account-menu";

    const mobileMenuId = "primary-search-account-menu-mobile";

    const menuProfileProps = {
        anchorEl,
        isMenuOpen,
        handleMenuClose,
        handleSignOut,
        navigate,
        menuId,
        getMenuClickHandler
    }
    const MobileMenuProps = {
        mobileMoreAnchorEl,
        isMobileMenuOpen,
        handleMobileMenuClose,
        handleProfileMenuOpen,
        getMenuClickHandler

    };
    const userMenuProps = { userSignin, handleProfileMenuOpen }

    const location = useLocation();
    const isHomePage = location.pathname === "/";

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
                    { isHomePage && (
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={ { "aria-label": "search" } }
                            />
                        </Search>
                    ) }
                    <Box sx={ { flexGrow: 1 } } />
                    <Box sx={ { display: { xs: "none", md: "flex" } } }>
                        <ShoppingCart />
                        <UserMenu { ...userMenuProps } />
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
            <MobileMenu { ...MobileMenuProps } />
            <ProfileMenu { ...menuProfileProps } />
        </div>
    );
}
