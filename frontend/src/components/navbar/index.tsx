import { AppBar, Box, Toolbar } from "@mui/material";

import ShoppingCart from "./ShoppingCart";
import ProductSearch from "./ProductSearch";
import DisplaySiteName from "./DisplaySiteName";
import UserSettings from "./UserSettings";
import UserAuthenticationLinks from "./UserAuthenticationLinks";
import useUserAuthContext from "../../hooks/context/useUserAuthContext";
import { navbarStyles } from "./styles";

const Navbar = () => {

    const { userSignedIn } = useUserAuthContext()

    return (
        <div id="navbar-container">
            <AppBar sx={ navbarStyles } position="fixed">
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
