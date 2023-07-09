import React, { useContext } from "react";
import { IconButton } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

import { ShoppingCartContext } from "../../contexts/shopping-cart-context/shoppingCartContext";

interface UserSettingMenuProps {
    userName: string;
}

const UserSettingMenu: React.FC<UserSettingMenuProps> = ({ userName }) => {

    const { handleProfileMenuOpen } = useContext(ShoppingCartContext);

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
}
export default UserSettingMenu;
