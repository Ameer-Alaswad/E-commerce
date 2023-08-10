import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { getFormData } from "../utils";
import useUserAuthContext from "../../../hooks/context/useUserAuthContext";
import useRedirectIfSignedIn from "../../../hooks/useRedirection";
import { BACKEND_SIGNIN_PATH } from "../../constants/path";
import useRedirectionRoute from "../../../hooks/useRedirectionRoute";
import usePostSignInUser from "../../../hooks/usePostSignInUser";
import { Box, Container } from "@mui/material";
import { mainContainerSignInStyles, signinContainerStyles } from "../styles";
import AuthFormTitle from "../AuthFormTitle";
import SubmitButton from "../SubmitButton";
import RedirectAuthLink from "../RedirectAuthLink";
import SignInFormInputs from "./SignInFormInputs";

const SignIn = () => {
  const navigate = useNavigate();
  // this tracks the clicked URL before getting redirected to signin page if existed
  const redirectionRoute = useRedirectionRoute();

  const { setUserSignedIn } = useUserAuthContext();

  useRedirectIfSignedIn();

  const { mutate: signInUser } = usePostSignInUser({
    URL: BACKEND_SIGNIN_PATH,
    setUserSignedIn,
    navigate,
    redirectionRoute,
  });

  const handleUserSignInSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const { name, email, password } = getFormData(formElement);
    const postUserSignInData = { name, email, password };
    signInUser(postUserSignInData);
  };

  return (
    <Container sx={ mainContainerSignInStyles } component="main" maxWidth="xs">
      <Box sx={ signinContainerStyles }>
        <AuthFormTitle />
        <Box component="form" onSubmit={ handleUserSignInSubmit } sx={ { mt: 1 } }>
          <SignInFormInputs />
          <SubmitButton />
          <RedirectAuthLink />
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
