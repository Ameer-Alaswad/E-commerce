// This component requires refactoring
import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { captureRedirectionRoute } from "../../../utils/utils";
import { toast } from "react-toastify";
import { getFormData } from "../utils";
import SignUpForm from "./SignUpForm";
import useUserAuthContext from "../../../hooks/context/useUserAuthContext";
import { BACKEND_SIGNUP_PATH } from "../../constants/path";
import useRedirection from "../../../hooks/useRedirection";
import usePostSignUpUser from "../../../hooks/usePostSignUpUser";

export default function SignUp() {
    const navigate = useNavigate();

    // this tracks the clicked URL before getting redirected to signin page if existed
    const { search } = useLocation();
    const redirect = captureRedirectionRoute(search);

    const { setUserSignedIn } = useUserAuthContext();

    const { mutate: postUser } = usePostSignUpUser({
        URL: BACKEND_SIGNUP_PATH,
        setUserSignedIn,
        navigate,
        redirect,
    });

    useRedirection();

    const handleUserSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        event.preventDefault();

        const {
            name,
            email,
            password,
            confirmPassword,
        } = getFormData(event.currentTarget);
        const postUserSignUpData = { name, email, password };

        password !== confirmPassword
            ? toast.error("passwords do not match!")
            : postUser(postUserSignUpData);
    };

    const handleNavigate = () => navigate(`/user/signup?redirect=${redirect}`);

    const signUpProps = {
        handleUserSubmit,
        handleNavigate,
    };
    return <SignUpForm { ...signUpProps } />;
}
