import { Avatar, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useLocation } from "react-router-dom";
import { SIGNIN_TEXT, SIGNUP_TEXT } from "../constants/text";
import { avatarStyles } from "./styles";
import { SIGNIN_PATH } from "../constants/path";

const AuthFormTitle = () => {
    const location = useLocation();

    const titleText = location.pathname === SIGNIN_PATH ? SIGNIN_TEXT : SIGNUP_TEXT;

    return (
        <>
            <Avatar sx={ avatarStyles }>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                { titleText }
            </Typography>
        </>
    );
};

export default AuthFormTitle;
