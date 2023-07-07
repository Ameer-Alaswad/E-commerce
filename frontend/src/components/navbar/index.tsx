import { AppBar, Box, Toolbar, Typography } from "@mui/material";

import { Link } from "react-router-dom";

import ShoppingCart from "./ShoppingCart";
import UserOptionsMobileMenu from "./UserOptionsMobileMenu";
import UserOptionsMenu from "./UserOptionsMenu";
import ProductSearch from "./ProductSearch";

import { linkToLanding, linkStyles, cartAndUserMenuStyles, mobileMenuStyles } from "./styles";
import IsUserOptionsMenuOpen from "./IsUserOptionsMenuOpen";
import IsUserOptionsMobileMenuOpen from "./IsUserOptionsMobileMenuOpen";

export default function PrimarySearchAppBar() {


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
                        <UserOptionsMenu />
                    </Box>
                    <Box sx={ { display: { ...mobileMenuStyles } } }>
                        < IsUserOptionsMobileMenuOpen />
                        <UserOptionsMobileMenu />
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
}
