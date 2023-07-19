import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import {
    avatarStyle,
    copyrightStyle,
    mainContainer,
    signinContainer,
    submitButtonStyle,
} from "../styles";
import Copyright from "../Copyright";
import { SignInFormProps } from "../sign-in/SigninForm";

const SignUpForm = ({ handleUserSubmit, handleNavigate }: SignInFormProps) => {

    return (

        <Container sx={ mainContainer } component="main" maxWidth="xs">
            <CssBaseline />
            <Box sx={ signinContainer }>
                <Avatar sx={ avatarStyle }>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" onSubmit={ handleUserSubmit } sx={ { mt: 1 } }>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        id="confirmPassword"
                        autoComplete="current-password"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={ submitButtonStyle }
                    >
                        Sign up
                    </Button>
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
                </Box>
            </Box>
            <Copyright sx={ copyrightStyle } />
        </Container>
    );
};

export default SignUpForm;
