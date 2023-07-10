import { AppBar, Box, Toolbar } from "@mui/material";

import ShoppingCart from "./ShoppingCart";
import ProductSearch from "./ProductSearch";
import DisplaySiteName from "./DisplaySiteName";
import UserSettings from "./UserSettings";
import UserAuthenticationLinks from "./UserAuthenticationLinks";
import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/shopping-cart-context/shoppingCartContext";

const Navbar = () => {
    const { userSignin } = useContext(ShoppingCartContext);

    if (!userSignin) {
        return null;
    }
    const { name: userName } = userSignin;

    return (
        <div id="navbar-container">
            <AppBar position="fixed">
                <Toolbar>
                    <DisplaySiteName />
                    <ProductSearch />
                    <Box sx={ { flexGrow: 1 } } />
                    <ShoppingCart />
                    { userSignin ? (
                        <UserSettings userName={ userName } />
                    ) : (
                        <UserAuthenticationLinks />
                    ) }
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;
