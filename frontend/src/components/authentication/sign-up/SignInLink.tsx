import { Grid } from '@mui/material'
import Link from "@mui/material/Link";
import { useLocation, useNavigate } from 'react-router-dom';
import { captureRedirectionRoute } from '../../../utils/utils';


const AlreadyHaveAccountSignInLink = () => {
    const navigate = useNavigate();

    const { search } = useLocation();
    const redirectionRoute = captureRedirectionRoute(search);
    const handleNavigate = () =>
        navigate(`/user/signup?redirect=${redirectionRoute}`);

    return (
        <Grid container>
            <Grid item>
                <Link
                    style={ { cursor: "pointer" } }
                    onClick={ handleNavigate }
                    variant="body2"
                >
                    { "Already have an account? Sign In" }
                </Link>
            </Grid>
        </Grid>
    )
}

export default AlreadyHaveAccountSignInLink