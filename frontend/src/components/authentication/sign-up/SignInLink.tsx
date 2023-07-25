import { Grid, Link } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { SIGNIN_REDIRECTION_LINK } from '../../constants/text';
import { SIGNUP_PATH_REDIRECTION_PATH } from '../../constants/path';
import useRedirectionRoute from '../../../hooks/useRedirectionRoute';


const AlreadyHaveAccountSignInLink = () => {

    const navigate = useNavigate();
    const redirectionRoute = useRedirectionRoute()

    const handleNavigate = () =>
        navigate(`${SIGNUP_PATH_REDIRECTION_PATH}${redirectionRoute}`);

    return (
        <Grid container>
            <Grid item>
                <Link
                    style={ { cursor: "pointer" } }
                    onClick={ handleNavigate }
                    variant="body2"
                >
                    { SIGNIN_REDIRECTION_LINK }
                </Link>
            </Grid>
        </Grid>
    )
}

export default AlreadyHaveAccountSignInLink