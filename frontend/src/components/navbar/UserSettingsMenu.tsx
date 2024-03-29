import { Menu, MenuItem } from "@mui/material";
import { ORDERS_HISTORY_PATH, UPDATE_USER_PATH } from "../constants/path";
import { MY_ORDERS_TEXT, PROFILE_TEXT, SIGNOUT_TEXT } from "../constants/text";
import { useNavigate } from "react-router-dom";
import useAppContext from "../../hooks/context/useAppContext";
import useUserAuthContext from "../../hooks/context/useUserAuthContext";
import useMenuSettingsContext from "../../hooks/context/useMenuSettingsContext";

type UserSettingsMenuProps = {
    isMenuOpen: boolean;
};
const UserSettingsMenu: React.FC<UserSettingsMenuProps> = ({ isMenuOpen }) => {
    const navigate = useNavigate();
    const { getMenuClickHandler } =
        useAppContext();
    const { userOptionsOpen, handleMenuClose } = useMenuSettingsContext()
    const { handleSignOut } = useUserAuthContext();
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
            <MenuItem onClick={ getMenuClickHandler(UPDATE_USER_PATH, navigate) }>
                { PROFILE_TEXT }
            </MenuItem>
            <MenuItem onClick={ getMenuClickHandler(ORDERS_HISTORY_PATH, navigate) }>
                { MY_ORDERS_TEXT }
            </MenuItem>
            <MenuItem onClick={ () => handleSignOut(navigate) }>
                { SIGNOUT_TEXT }
            </MenuItem>
        </Menu>
    );
};

export default UserSettingsMenu;
