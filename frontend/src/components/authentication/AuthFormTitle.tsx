import { Avatar, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { SIGNIN_TEXT, SIGNUP_TEXT } from "../constants/text";
import { avatarStyles } from "./styles";
import { SIGNIN_PATH } from "../constants/path";
import useCustomLocation from "../../hooks/useCustomLocation";

const AuthFormTitle = () => {
    const {location} = useCustomLocation();

    const authFormTitleText =
        location.pathname === SIGNIN_PATH ? SIGNIN_TEXT : SIGNUP_TEXT;

    return (
        <>
            <Avatar sx={ avatarStyles }>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                { authFormTitleText }
            </Typography>
        </>
    );
};

export default AuthFormTitle;