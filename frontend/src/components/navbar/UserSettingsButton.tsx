import React from "react";
import { IconButton } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

import useAppContext from "../../hooks/useAppContext";
import useMenuSettingsContext from "../../hooks/useMenuSettingsContext";

interface UserSettingMenuProps {
    userName: string
}

const UserSettingMenu: React.FC<UserSettingMenuProps> = ({ userName }) => {

    const { handleProfileMenuOpen } = useMenuSettingsContext()

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
