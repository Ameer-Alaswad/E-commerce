// This component requires refactoring
import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { postUser } from "../../../fetchers/fetchUser";
import { useContext } from "react";

import { captureRedirectionRoute, checkUserLoggedIn } from "../../../utils/utils";
import { toast } from "react-toastify";
import { getFormData } from "../utils";
import SignUpForm from "./SignUpForm";
import useAppContext from "../../../hooks/useAppContext";

export default function SignUp() {
    const navigate = useNavigate();

    // this tracks the clicked URL before getting redirected to signin page if existed
    const { search } = useLocation();
    const redirect = captureRedirectionRoute(search)

    const { userSignin, setUserSignin } = useAppContext()

    const userSigned = checkUserLoggedIn(userSignin);

    React.useEffect(() => {
        if (userSigned) navigate("/");
    }, [userSigned, navigate]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if (data.get("password") !== data.get("confirmPassword")) {
            toast.error("passwords do not match!");
            return
        }
        postUser(
            "/api/users/signup",
            getFormData(event.currentTarget),
            setUserSignin,
            navigate,
            redirect
        );
    };

    const handleNavigate = () => navigate(`/user/signup?redirect=${redirect}`);


    const signUpProps = {
        handleSubmit,
        handleNavigate,
    };
    return <SignUpForm { ...signUpProps } />
}
