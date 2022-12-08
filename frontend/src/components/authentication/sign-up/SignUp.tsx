// This component requires refactoring
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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { postUser } from "../../../fetchers/fetchUser";
import { useContext } from "react";
import { ShoppingCartContext } from "../../../contexts/shopping-cart-context/shoppingCartContext";
import { useLocation, useNavigate } from "react-router-dom";
import { checkUserLoggedIn } from "../../../utils/utils";
import { toast } from "react-toastify";

function Copyright(props: any) {
    const navigate = useNavigate();
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            { ...props }
        >
            { "Copyright © " }
            <Link color="inherit" onClick={ () => navigate("/") }>
                Your Website
            </Link>{ " " }
            { new Date().getFullYear() }
            { "." }
        </Typography>
    );
}

const theme = createTheme();
export default function SignUp() {
    // this tracks the clicked URL before getting redirected to signin page if existed
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get("redirect");
    const redirect = redirectInUrl ? redirectInUrl : "/";

    const navigate = useNavigate();
    const shoppingCartContext = useContext(ShoppingCartContext);
    const { userSignin, setUserSignin } = shoppingCartContext;

    const userSigned = checkUserLoggedIn(userSignin);

    React.useEffect(() => {
        if (userSigned) navigate("/");
    }, [userSigned, navigate]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data.get("password"), data.get("confirmPassword"));

        if (data.get("password") !== data.get("confirmPassword"))
            return toast.error("passwords do not match!");
        postUser(
            "/api/users/signup",
            {
                name: String(data.get("name")),
                email: String(data.get("email")),
                password: String(data.get("password")),
            },
            setUserSignin,
            navigate,
            redirect
        );
    };
    return (
        <ThemeProvider theme={ theme }>
            <Container
                sx={ {
                    height: "100vh",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                } }
                component="main"
                maxWidth="xs"
            >
                <CssBaseline />
                <Box
                    sx={ {
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    } }
                >
                    <Avatar sx={ { m: 1, bgcolor: "secondary.main" } }>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" onSubmit={ handleSubmit } sx={ { mt: 1 } }>
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
                            sx={ { mt: 3, mb: 2 } }
                        >
                            Sign up
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link
                                    style={ { cursor: "pointer" } }
                                    onClick={ () => navigate(`/user/signin?redirect=${redirect}`) }
                                    variant="body2"
                                >
                                    { "Already have an account? Sign In" }
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={ { mt: 8, mb: 4 } } />
            </Container>
        </ThemeProvider>
    );
}
