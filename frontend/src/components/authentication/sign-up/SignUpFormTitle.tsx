import { Avatar, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { avatarStyle } from "../styles";
import { SIGNUP_TEXT } from "../../constants/text";


const SignUpFormTitle = () => {
    return (
        <>
            <Avatar sx={ avatarStyle }>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                { SIGNUP_TEXT }
            </Typography>
        </>
    );
};

export default SignUpFormTitle;
