import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { captureRedirectionRoute } from "../../../utils/utils";

import { getFormData } from "../utils";
import SignInForm from "./SigninForm";
import useUserAuthContext from "../../../hooks/context/useUserAuthContext";
import useCustomLocation from "../../../hooks/useCustomLocation";
import useRedirection from "../../../hooks/useRedirection";
import { BACKEND_SIGNIN_PATH } from "../../constants/path";
import useMutateUser from "../../../hooks/usePostSignUpUser";

const SignIn = () => {
  const navigate = useNavigate();
  // this tracks the clicked URL before getting redirected to signin page if existed
  const { search } = useCustomLocation();
  const redirect = captureRedirectionRoute(search);
  const { setUserSignedIn } = useUserAuthContext();

  useRedirection();

  const { mutate: postUser } = useMutateUser({
    URL: BACKEND_SIGNIN_PATH,
    setUserSignedIn,
    navigate,
    redirect,
  });

  const handleUserSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userData = getFormData(event.currentTarget);
    // postUser(userData);
  };
  const handleNavigate = () => navigate(`/user/signup?redirect=${redirect}`);

  const signInProps = {
    handleUserSubmit,
    handleNavigate,
  };

  return <SignInForm { ...signInProps } />;
};

export default SignIn;
