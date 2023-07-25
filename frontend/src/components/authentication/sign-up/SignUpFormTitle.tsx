import { Avatar, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { avatarStyle } from "../styles";


const SignUpFormTitle = () => {
    return (
        <>
            <Avatar sx={ avatarStyle }>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign up
            </Typography>
        </>
    );
};

export default SignUpFormTitle;
