import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useUserAuthContext from "./context/useUserAuthContext";
import useCheckoutContext from "./context/useCheckoutContext";

const SIGNIN_REDIRECTION_PATH = "/user/signin?redirect=/shipping";
const SIGN_IN_ERROR = "Sign in first!";

const useSignInCheck = (progressStepNum: number, redirectionPath: string) => {
    const navigate = useNavigate();
    const { userSignedIn } = useUserAuthContext();
    const { setProgressStep } = useCheckoutContext();

    useEffect(() => {
        setProgressStep(progressStepNum);
        if (!userSignedIn) {
            navigate(`${SIGNIN_REDIRECTION_PATH}${redirectionPath}`);
            setTimeout(() => {
                toast.error(SIGN_IN_ERROR);
            }, 100);
        }
    }, [
        userSignedIn,
        navigate,
        setProgressStep,
        redirectionPath,
        progressStepNum,
    ]);
};

export default useSignInCheck;
