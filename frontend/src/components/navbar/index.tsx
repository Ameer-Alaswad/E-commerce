import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import {
    landingLinkStyles,
    linkDisplayStyles,
    cartAndUserMenuDisplayStyles,
    mobileMenuDisplayStyles,
} from "./styles";

import ShoppingCart from "./ShoppingCart";
import UserOptionsMobileMenu from "./UserOptionsMobileMenu";
import UserOptionsMenu from "./UserOptionsMenu";
import ProductSearch from "./ProductSearch";
import IsUserOptionsMenuOpen from "./IsUserOptionsMenuOpen";
import IsUserOptionsMobileMenuOpen from "./IsUserOptionsMobileMenuOpen";
import { HOME_PATH } from "../constants";

const Navbar = () => (
    <div id="navbar-container">
        <AppBar position="fixed">
            <Toolbar>
                <Link to={ HOME_PATH } style={ landingLinkStyles }>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={ { display: { ...linkDisplayStyles } } }
                    >
                        E-commerce
                    </Typography>
                </Link>
                <ProductSearch />
                <Box sx={ { flexGrow: 1 } } />
                <Box sx={ { display: { ...cartAndUserMenuDisplayStyles } } }>
                    <ShoppingCart />
                    <IsUserOptionsMenuOpen />
                    <UserOptionsMenu />
                </Box>
                <Box sx={ { display: { ...mobileMenuDisplayStyles } } }>
                    <IsUserOptionsMobileMenuOpen />
                    <UserOptionsMobileMenu />
                </Box>
            </Toolbar>
        </AppBar>
    </div>
);

export default Navbar;
