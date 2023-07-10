import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { postUser } from "../../../fetchers/fetchUser";
import {
    captureRedirectionRoute,
    checkUserLoggedIn,
} from "../../../utils/utils";

import { getFormData } from "../utils";
import SignInForm from "./SigninForm";
import useAppContext from "../../../hooks/useAppContext";

export default function SignIn() {
    const navigate = useNavigate();
    // this tracks the clicked URL before getting redirected to signin page if existed
    const { search } = useLocation();
    const redirect = captureRedirectionRoute(search);

    const { userSignin, setUserSignin } = useAppContext();

    const userSigned = checkUserLoggedIn(userSignin);

    useEffect(() => {
        if (userSigned) navigate(redirect);
    }, [userSigned, navigate, redirect]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        postUser(
            "/api/users/signin",
            getFormData(event.currentTarget),
            setUserSignin,
            navigate,
            redirect
        );
    };
    const handleNavigate = () => navigate(`/user/signup?redirect=${redirect}`);

    const signInProps = {
        handleSubmit,
        handleNavigate,
    };

    return <SignInForm { ...signInProps } />;
}
