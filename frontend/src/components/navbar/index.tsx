import { AppBar, Box, Toolbar } from "@mui/material";

import ShoppingCart from "./ShoppingCart";
import ProductSearch from "./ProductSearch";
import DisplaySiteName from "./DisplaySiteName";
import UserSettings from "./UserSettings";
import UserAuthenticationLinks from "./UserAuthenticationLinks";
import useAppContext from "../../hooks/useAppContext";

const Navbar = () => {

    const { userSignedIn } = useAppContext()

    return (
        <div id="navbar-container">
            <AppBar position="fixed">
                <Toolbar>
                    <DisplaySiteName />
                    <ProductSearch />
                    <Box sx={ { flexGrow: 1 } } />
                    <ShoppingCart />
                    { userSignedIn ? (
                        <UserSettings userName={ userSignedIn?.name } />
                    ) : (
                        <UserAuthenticationLinks />
                    ) }
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;
