import React from "react";
import { Link } from "react-router-dom";
import { IconButton, Box } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { userSignin } from "../../contexts/shopping-cart-context/shoppingCartContextTypes";
import { headerStyles } from "./styles";

const { linkToLanding } = headerStyles


interface UserMenuProps {
    userSignin?: userSignin | null;
    handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
}

const UserMenu: React.FC<UserMenuProps> = ({
    userSignin,
    handleProfileMenuOpen,
}) => {
    const menuId = "user-menu";

    return (
        <>
            { userSignin ? (
                <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={ menuId }
                    aria-haspopup="true"
                    onClick={ handleProfileMenuOpen }
                    color="inherit"
                >
                    { userSignin.name }&nbsp;
                    <AccountCircle />
                </IconButton>
            ) : (
                <Box sx={ { marginTop: "11px" } }>
                    <Link style={ linkToLanding } to="/user/signin">
                        Signin!
                    </Link>{ " " }
                    /
                    <Link style={ linkToLanding } to="/user/signup">
                        { " " }
                        Signup!
                    </Link>
                </Box>
            ) }
        </>
    );
};

export default UserMenu;