import { useContext } from "react";
import { Link } from "react-router-dom";
import { IconButton, Box } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

import { landingLinkStyles } from "./styles";

import { ShoppingCartContext } from "../../contexts/shopping-cart-context/shoppingCartContext";
import { SIGNIN_PATH, SIGNIN_TEXT, SIGNUP_PATH, SIGNUP_TEXT } from "../constants";

const IsUserOptionsMenuOpen = (
) => {

    const shoppingCartContext = useContext(ShoppingCartContext);
    const { userSignin, handleProfileMenuOpen } = shoppingCartContext;

    if (userSignin) {
        const { name: userName } = userSignin
        return (
            <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={ handleProfileMenuOpen }
                color="inherit"
            >
                { userName }&nbsp;
                <AccountCircle />
            </IconButton>
        );
    } else {
        return (
            <Box sx={ { marginTop: "11px" } }>
                <Link style={ landingLinkStyles } to={ SIGNIN_PATH }>
                    { SIGNIN_TEXT }
                </Link>{ " " }
                /
                <Link style={ landingLinkStyles } to={ SIGNUP_PATH }>
                    { SIGNUP_TEXT }
                </Link>
            </Box>
        );
    }
};

export default IsUserOptionsMenuOpen;