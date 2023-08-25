import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useUserAuthContext from "./context/useUserAuthContext";
import useCheckoutContext from "./context/useCheckoutContext";
import {
    PLACE_ORDER,
    SHOPPING_CART_PATH,
    SIGNIN_REDIRECTION_PATH,
} from "../components/constants/path";
import { SIGN_IN_ERROR } from "../components/constants/text";
import { ITEMS_IN_CART_FIRST_ERROR } from "../components/constants/errorMessages";
import useShoppingCartContext from "./context/useShoppingCartContext";

const usePlaceOrderValidationAndRedirect = () => {
    const { userSignedIn } = useUserAuthContext();
    const { shoppingCartItems } = useShoppingCartContext()

    const navigate = useNavigate();
    const { progressStep, setProgressStep, shippingAddressData } =
        useCheckoutContext();
    useEffect(() => {
        const isEmptyShoppingCart = shoppingCartItems.length === 0

        setProgressStep(progressStep);
        if (!userSignedIn) {
            navigate(`${SIGNIN_REDIRECTION_PATH}${PLACE_ORDER}`);
            toast.error(SIGN_IN_ERROR);
            return;
        }
        else if (isEmptyShoppingCart) {
            navigate(`${SHOPPING_CART_PATH}`);
            toast.error(ITEMS_IN_CART_FIRST_ERROR);
            return
        }

    }, [
        userSignedIn,
        navigate,
        setProgressStep,
        shippingAddressData,
        progressStep,
        shoppingCartItems.length
    ]);
};

export default usePlaceOrderValidationAndRedirect;
