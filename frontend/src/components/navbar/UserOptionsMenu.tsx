import { useContext } from "react";
import useCustomNavigate from "../../hooks/useCustomNavigate";

import { Menu, MenuItem } from "@mui/material";

import { ShoppingCartContext } from "../../contexts/shopping-cart-context/shoppingCartContext";
import { ORDERS_HISTORY_PATH, UPDATE_USER_PATH } from "../constants/path";
import { MY_ORDERS_TEXT, PROFILE_TEXT, SIGNOUT_TEXT } from "../constants/text";

const UserOptionsMenu = () => {

    const navigate = useCustomNavigate();
    const shoppingCartContext = useContext(ShoppingCartContext);
    const {
        userOptionsOpen,
        isMenuOpen,
        handleMenuClose,
        getMenuClickHandler,
        handleSignOut,
    } = shoppingCartContext;

    const menuId = "primary-search-account-menu";

    return (
        <Menu
            anchorEl={ userOptionsOpen }
            anchorOrigin={ {
                vertical: "top",
                horizontal: "right",
            } }
            id={ menuId }
            keepMounted
            transformOrigin={ {
                vertical: "top",
                horizontal: "right",
            } }
            open={ isMenuOpen }
            onClose={ handleMenuClose }
        >
            <MenuItem onClick={ getMenuClickHandler(UPDATE_USER_PATH, navigate) }>
                { PROFILE_TEXT }
            </MenuItem>
            <MenuItem onClick={ getMenuClickHandler(ORDERS_HISTORY_PATH, navigate) }>
                { MY_ORDERS_TEXT }
            </MenuItem>
            <MenuItem onClick={ () => handleSignOut(navigate) }>{ SIGNOUT_TEXT }</MenuItem>
        </Menu>
    );
};

export default UserOptionsMenu;
