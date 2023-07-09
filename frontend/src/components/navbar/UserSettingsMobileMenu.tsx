import { useContext } from "react";
import useCustomNavigate from "../../hooks/useCustomNavigate";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ViewListIcon from "@mui/icons-material/ViewList";

import { ShoppingCartContext } from "../../contexts/shopping-cart-context/shoppingCartContext";
import { ORDERS_HISTORY_PATH, UPDATE_USER_PATH } from "../constants/path";
import { MY_ORDERS_TEXT, PROFILE_TEXT, SIGNOUT_TEXT } from "../constants/text";
import ShoppingCart from "./ShoppingCart";

type UserSettingsMobileMenuProps = {
    isMobileMenuOpen: boolean
}

const UserSettingsMobileMenu: React.FC<UserSettingsMobileMenuProps> = ({ isMobileMenuOpen }) => {
    const navigate = useCustomNavigate()

    const shoppingCartContext = useContext(ShoppingCartContext);
    const {
        handleMobileMenuClose,
        getMenuClickHandler,
        userOptionsOpenMobile,
        handleProfileMenuOpen,
        handleSignOut
    } = shoppingCartContext;

    return (
        <Menu
            anchorEl={ userOptionsOpenMobile }
            anchorOrigin={ {
                vertical: "top",
                horizontal: "right",
            } }
            id="primary-search-account-menu-mobile"
            keepMounted
            transformOrigin={ {
                vertical: "top",
                horizontal: "right",
            } }
            open={ isMobileMenuOpen }
            onClose={ handleMobileMenuClose }
        >
            <MenuItem onClick={ getMenuClickHandler(UPDATE_USER_PATH, navigate) }>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                    onClick={ handleProfileMenuOpen }
                >
                    <AccountCircle />
                </IconButton>
                <p>{ PROFILE_TEXT }</p>
            </MenuItem>
            <MenuItem onClick={ getMenuClickHandler(ORDERS_HISTORY_PATH, navigate) }>
                <IconButton
                    size="large"
                    aria-label="shopping cart"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <ViewListIcon />
                </IconButton>
                <p>{ MY_ORDERS_TEXT }</p>
            </MenuItem>
            <MenuItem onClick={ () => handleSignOut(navigate) }>{ SIGNOUT_TEXT }</MenuItem>

        </Menu>
    );
};

export default UserSettingsMobileMenu;
