import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

import { landingLinkStyles } from "./styles";
import { SIGNIN_PATH, SIGNUP_PATH } from "../constants/path";
import { SIGNIN_TEXT, SIGNUP_TEXT } from "../constants/text";

const UserAuthenticationLinks: React.FC = () => {
    return (
        <Box sx={ { marginTop: "11px" } }>
            <Link style={ landingLinkStyles } to={ SIGNIN_PATH }>
                { SIGNIN_TEXT }
            </Link>{ " " }
            /
            <Link style={ landingLinkStyles } to={ SIGNUP_PATH }>
                { SIGNUP_TEXT }
            </Link>
        </Box>
    );
};

export default UserAuthenticationLinks;
