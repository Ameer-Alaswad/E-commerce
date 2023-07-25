// This component requires refactoring
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Container, CssBaseline, Box } from "@mui/material";

import useUserAuthContext from "../../../hooks/context/useUserAuthContext";
import { getFormData } from "../utils";
import useRedirection from "../../../hooks/useRedirection";
import usePostSignUpUser from "../../../hooks/usePostSignUpUser";
import SignUpFormTitle from "./SignUpFormTitle";
import { SignUpFormInputs } from "./SignUpFormInputs";
import Copyright from "../Copyright";
import SubmitButton from "./SubmitButton";
import AlreadyHaveAccountSignInLink from "./SignInLink";

import { BACKEND_SIGNUP_PATH } from "../../constants/path";
import { PASSWORDS_DO_NOT_MATCH_ERROR } from "../../constants/errorMessages";

import { copyrightStyle, mainContainer, signupContainer } from "../styles";
import useRedirectionRoute from "../../../hooks/useRedirectionRoute";

const SignUpUser = () => {
    const navigate = useNavigate();

    const { setUserSignedIn } = useUserAuthContext();
    // to redirect the user to the desired page after he finishes signing up
    const redirectionRoute = useRedirectionRoute()

    const { mutate: postUser } = usePostSignUpUser({
        URL: BACKEND_SIGNUP_PATH,
        setUserSignedIn,
        navigate,
        redirectionRoute,
    });

    useRedirection();

    const handleUserSignUpSubmit = async (
        event: FormEvent<HTMLFormElement>
    ): Promise<void> => {
        event.preventDefault();
        const formElement = event.currentTarget;
        const { name, email, password, confirmPassword } = getFormData(formElement);
        const postUserSignUpData = { name, email, password };

        password !== confirmPassword
            ? toast.error(PASSWORDS_DO_NOT_MATCH_ERROR)
            : postUser(postUserSignUpData);
    };

    return (
        <Container sx={ mainContainer } component="main" maxWidth="xs">
            <CssBaseline />
            <Box sx={ signupContainer }>
                <SignUpFormTitle />
                <Box component="form" onSubmit={ handleUserSignUpSubmit } sx={ { mt: 1 } }>
                    <SignUpFormInputs />
                    <SubmitButton />
                    <AlreadyHaveAccountSignInLink />
                </Box>
            </Box>
            <Copyright sx={ copyrightStyle } />
        </Container>
    );
};
export default SignUpUser;
