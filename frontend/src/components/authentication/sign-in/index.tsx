import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { postUser } from "../../../fetchers/fetchUser";
import {
    captureRedirectionRoute,
} from "../../../utils/utils";

import { getFormData } from "../utils";
import SignInForm from "./SigninForm";
import useUserAuthContext from "../../../hooks/context/useUserAuthContext";
import useCustomLocation from "../../../hooks/useCustomLocation";
import useRedirection from "../../../hooks/useRedirection";

const SignIn = () => {
    const navigate = useNavigate();
    // this tracks the clicked URL before getting redirected to signin page if existed
    const { search } = useCustomLocation()
    const redirect = captureRedirectionRoute(search);
    const { setUserSignedIn } = useUserAuthContext();

    useRedirection()

    const handleUserSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        postUser(
            "/api/users/signin",
            getFormData(event.currentTarget),
            setUserSignedIn,
            navigate,
            redirect
        );
    };
    const handleNavigate = () => navigate(`/user/signup?redirect=${redirect}`);

    const signInProps = {
        handleUserSubmit,
        handleNavigate,
    };

    return <SignInForm { ...signInProps } />;
};
export default SignIn;
