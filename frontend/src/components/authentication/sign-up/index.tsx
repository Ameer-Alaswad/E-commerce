// This component requires refactoring
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Container, CssBaseline, Box } from "@mui/material";

import useUserAuthContext from "../../../hooks/context/useUserAuthContext";
import { getFormData } from "../utils";
import usePostSignUpUser from "../../../hooks/usePostSignUpUser";
import useRedirectionRoute from "../../../hooks/useRedirectionRoute";
import useRedirectIfSignedIn from "../../../hooks/useRedirection";

import AuthFormTitle from "../AuthFormTitle";
import { SignUpFormInputs } from "./SignUpFormInputs";
import Copyright from "../Copyright";
import SubmitButton from "../SubmitButton";
import RedirectAuthLink from "../RedirectAuthLink";

import { BACKEND_SIGNUP_PATH } from "../../constants/path";
import { PASSWORDS_DO_NOT_MATCH_ERROR } from "../../constants/errorMessages";
import { copyrightStyles, mainContainerSignUpStyles, signupContainerStyles } from "../styles";
import { UserSignUpData } from "../types";



const SignUpUser = () => {
    const navigate = useNavigate();

    const { setUserSignedIn } = useUserAuthContext();
    // to redirect the user to the desired page after he finishes signing up
    const redirectionRoute = useRedirectionRoute();

    const { mutate: postUser } = usePostSignUpUser({
        URL: BACKEND_SIGNUP_PATH,
        setUserSignedIn,
        navigate,
        redirectionRoute,
    });

    useRedirectIfSignedIn();

    const handleUserSignUpSubmit = async (
        event: FormEvent<HTMLFormElement>
    ): Promise<void> => {
        event.preventDefault();
        const formElement = event.currentTarget;
        const { name, email, password, confirmPassword } = getFormData(formElement);
        const postUserSignUpData: UserSignUpData = { name, email, password };
        const passwordsDoNotMatch = password !== confirmPassword;

        passwordsDoNotMatch
            ? toast.error(PASSWORDS_DO_NOT_MATCH_ERROR)
            : postUser(postUserSignUpData);
    };

    return (
        <Container sx={ mainContainerSignUpStyles } component="main" maxWidth="xs">
            <CssBaseline />
            <Box sx={ signupContainerStyles }>
                <AuthFormTitle />
                <Box component="form" onSubmit={ handleUserSignUpSubmit } sx={ { mt: 1 } }>
                    <SignUpFormInputs />
                    <SubmitButton />
                    <RedirectAuthLink />
                </Box>
            </Box>
            <Copyright sx={ copyrightStyles } />
        </Container>
    );
};
export default SignUpUser;
