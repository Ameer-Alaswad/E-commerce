import React from "react";
import { IconButton, Typography } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import useMenuSettingsContext from "../../hooks/context/useMenuSettingsContext";


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
            sx={ { color: "#0000CD" } }
        >
            <Typography
                variant="h5"
                sx={ { color: "#ff5200" } }>
                { userName }&nbsp;
            </Typography>
            <AccountCircle />
        </IconButton>
    );
}
export default UserSettingMenu;
