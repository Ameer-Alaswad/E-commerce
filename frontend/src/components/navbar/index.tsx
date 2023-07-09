import { AppBar, Box, Toolbar } from "@mui/material";

import {
    cartAndUserMenuDisplayStyles,
    mobileMenuDisplayStyles,
} from "./styles";

import ShoppingCart from "./ShoppingCart";
import UserOptionsMobileMenu from "./UserOptionsMobileMenu";
import UserOptionsMenu from "./UserOptionsMenu";
import ProductSearch from "./ProductSearch";
import UserOptionsMobileButton from "./UserOptionsMobileButton";
import DisplaySiteName from "./DisplaySiteName";
import UserOptionsButton from "./ UserOptionsButton";
import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/shopping-cart-context/shoppingCartContext";
import UserAuthenticationLinks from "./UserAuthenticationLinks";

const Navbar = () => {
    const shoppingCartContext = useContext(ShoppingCartContext);
    const { userSignin } = shoppingCartContext;

    if (!userSignin) {
        return null;
    }

    const { name: userName } = userSignin;

    const renderUserNavigationWithOptions = () =>
        userName ? (
            <>
                <UserOptionsButton userName={ userName } />
                <UserOptionsMenu />
            </>
        ) : (
            <UserAuthenticationLinks />
        );

    return (
        <div id="navbar-container">
            <AppBar position="fixed">
                <Toolbar>
                    <DisplaySiteName />
                    <ProductSearch />
                    <Box sx={ { flexGrow: 1 } } />
                    <Box sx={ { display: { ...cartAndUserMenuDisplayStyles } } }>
                        <ShoppingCart />
                        { renderUserNavigationWithOptions() }
                    </Box>
                    <Box sx={ { display: { ...mobileMenuDisplayStyles } } }>
                        <UserOptionsMobileButton />
                        <UserOptionsMobileMenu />
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;
