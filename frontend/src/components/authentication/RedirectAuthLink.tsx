import { Grid, Link } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import {
    SIGNIN_REDIRECTION_LINK_TEXT,
    SIGNUP_REDIRECTION_LINK_TEXT,
} from "../constants/text";
import {
    SIGNIN_REDIRECTION_PATH,
    SIGNUP_PATH,
    SIGNUP_REDIRECTION_PATH,
} from "../constants/path";
import useRedirectionRoute from "../../hooks/useRedirectionRoute";

const RedirectAuthLink = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const redirectionRoute = useRedirectionRoute();
    const locationIsSignUp = location.pathname === SIGNUP_PATH

    const targetRedirectionPath =
        locationIsSignUp
            ? SIGNIN_REDIRECTION_PATH
            : SIGNUP_REDIRECTION_PATH;

    const redirectionLinkText =
        locationIsSignUp
            ? SIGNIN_REDIRECTION_LINK_TEXT
            : SIGNUP_REDIRECTION_LINK_TEXT;

    const handleNavigate = () =>
        navigate(`${targetRedirectionPath}${redirectionRoute}`);

    return (
        <Grid container>
            <Grid item>
                <Link
                    style={ { cursor: "pointer" } }
                    onClick={ handleNavigate }
                    variant="body2"
                >
                    { redirectionLinkText }
                </Link>
            </Grid>
        </Grid>
    );
};

export default RedirectAuthLink;
