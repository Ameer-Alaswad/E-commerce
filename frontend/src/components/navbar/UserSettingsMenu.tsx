import { useContext } from "react";
import useNavigation from "../../hooks/useNavigation";
import { Menu, MenuItem } from "@mui/material";
import { ShoppingCartContext } from "../../contexts/shopping-cart-context/shoppingCartContext";
import { MY_ORDERS_TEXT, PROFILE_TEXT, SIGNOUT_TEXT } from "../constants/text";

type UserSettingsMenuProps = {
    isMenuOpen: boolean

}

const UserSettingsMenu: React.FC<UserSettingsMenuProps> = ({ isMenuOpen }) => {
    const { navigateUserSignIn, navigateUpdateUser, navigateOrdersHistory } = useNavigation();
    const {
        userOptionsOpen,
        handleMenuClose,
        // getMenuClickHandler,
        handleSignOut,
        handleNavigation
    } = useContext(ShoppingCartContext);


    // When isMenuOpen state is true this function return a dropdown menu that show some navigation options
    // to the user such as my Orders, Orders History etc...
    return (
        <Menu
            anchorEl={ userOptionsOpen }
            anchorOrigin={ {
                vertical: "top",
                horizontal: "right",
            } }
            id="primary-search-account-menu"
            keepMounted
            transformOrigin={ {
                vertical: "top",
                horizontal: "right",
            } }
            open={ isMenuOpen }
            onClose={ handleMenuClose }
        >
            <MenuItem onClick={ () => handleNavigation(navigateUpdateUser) }>
                { PROFILE_TEXT }
            </MenuItem>
            <MenuItem onClick={ () => handleNavigation(navigateOrdersHistory) }>
                { MY_ORDERS_TEXT }
            </MenuItem>
            <MenuItem onClick={ () => handleSignOut(navigateUserSignIn) }>
                { SIGNOUT_TEXT }
            </MenuItem>
        </Menu>
    );
};

export default UserSettingsMenu;
