import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { postUser } from "../../../fetchers/fetchUser";
import { useContext } from "react";
import { ShoppingCartContext } from "../../../contexts/shopping-cart-context/shoppingCartContext";
import { useLocation, useNavigate } from "react-router-dom";
import { captureRedirectionRoute, checkUserLoggedIn } from "../../../utils/utils";
import Copyright from "../Copyright";

const mainContainer = {
    height: "100vh",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}
const signinContainer = {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}

export default function SignIn() {

    const navigate = useNavigate()
    // this tracks the clicked URL before getting redirected to signin page if existed 
    const { search } = useLocation()
    const redirect = captureRedirectionRoute(search)

    const shoppingCartContext = useContext(ShoppingCartContext);
    const { userSignin, setUserSignin } = shoppingCartContext;

    const userSigned = checkUserLoggedIn(userSignin)

    React.useEffect(() => {
        if (userSigned) navigate(redirect)
    }, [userSigned, navigate, redirect])


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        postUser("/api/users/signin", {
            email: String(data.get("email")),
            password: String(data.get("password")),
        }, setUserSignin, navigate, redirect)
    }

    return (
        <Container
            sx={ mainContainer }
            component="main"
            maxWidth="xs"
        >
            <CssBaseline />
            <Box
                sx={ signinContainer }
            >
                <Avatar sx={ { m: 1, bgcolor: "secondary.main" } }>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box
                    component="form"
                    onSubmit={ handleSubmit }
                    sx={ { mt: 1 } }
                >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
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
                    <FormControlLabel
                        control={ <Checkbox value="remember" color="primary" /> }
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={ { mt: 3, mb: 2 } }
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link style={ { cursor: "pointer" } } onClick={ () => navigate(`/user/signup?redirect=${redirect}`) } variant="body2">
                                { "Don't have an account? Sign Up" }
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={ { mt: 8, mb: 4 } } />
        </Container>
    );
}
