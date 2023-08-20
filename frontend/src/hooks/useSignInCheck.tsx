import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import useUserAuthContext from "./context/useUserAuthContext";
import useCheckoutContext from "./context/useCheckoutContext";

import { SHOPPING_CART_PATH, SIGNIN_REDIRECTION_PATH } from "../components/constants/path";
import { SIGN_IN_ERROR } from "../components/constants/text";
import useShoppingCartContext from "./context/useShoppingCartContext";
import { ITEMS_IN_CART_FIRST_ERROR } from "../components/constants/errorMessages";

const useSignInCheck = (progressStepNum: number, redirectionPath: string) => {
    const navigate = useNavigate();
    const { userSignedIn } = useUserAuthContext();
    const { setProgressStep } = useCheckoutContext();
    const { shoppingCartItems } = useShoppingCartContext()

    useEffect(() => {
        const isEmptyShoppingCart = shoppingCartItems.length === 0

        setProgressStep(progressStepNum);
        if (!userSignedIn) {
            navigate(`${SIGNIN_REDIRECTION_PATH}${redirectionPath}`);
            setTimeout(() => {
                toast.error(SIGN_IN_ERROR);
            }, 100);
        }
        if (isEmptyShoppingCart) {
            navigate(SHOPPING_CART_PATH);
            setTimeout(() => {
                toast.error(ITEMS_IN_CART_FIRST_ERROR);
            }, 100);
        }
    }, [
        userSignedIn,
        navigate,
        setProgressStep,
        redirectionPath,
        progressStepNum,
        shoppingCartItems
    ]);
};

export default useSignInCheck;
