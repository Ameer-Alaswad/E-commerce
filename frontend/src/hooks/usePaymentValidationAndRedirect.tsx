import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useUserAuthContext from "./context/useUserAuthContext";
import useCheckoutContext from "./context/useCheckoutContext";
import {
    PAYMENT_PATH,
    SHIPPING_ADDRESS_REDIRECTION_PATH,
    SHIPPING_PATH,
    SHOPPING_CART_PATH,
    SIGNIN_REDIRECTION_PATH,
} from "../components/constants/path";
import { SIGN_IN_ERROR } from "../components/constants/text";
import { ITEMS_IN_CART_FIRST_ERROR, SHIPPING_ADDRESS_ERROR_MESSAGE } from "../components/constants/errorMessages";
import useShoppingCartContext from "./context/useShoppingCartContext";

const usePaymentValidationAndRedirect = () => {
    const { userSignedIn } = useUserAuthContext();
    const { shoppingCartItems } = useShoppingCartContext()

    const navigate = useNavigate();
    const { progressStep, setProgressStep, shippingAddressData } =
        useCheckoutContext();
    useEffect(() => {
        const isEmptyShippingAddressData = Object.keys(shippingAddressData).length === 0
        const isEmptyShoppingCart = shoppingCartItems.length === 0

        setProgressStep(1);
        if (!userSignedIn) {
            navigate(`${SIGNIN_REDIRECTION_PATH}${PAYMENT_PATH}`);
            toast.error(SIGN_IN_ERROR);
            return;
        }
        else if (isEmptyShoppingCart) {
            navigate(`${SHOPPING_CART_PATH}`);
            toast.error(ITEMS_IN_CART_FIRST_ERROR);
            return
        }

        else if (isEmptyShippingAddressData) {
            navigate(`${SHIPPING_ADDRESS_REDIRECTION_PATH}${SHIPPING_PATH}`);
            toast.error(SHIPPING_ADDRESS_ERROR_MESSAGE);
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

export default usePaymentValidationAndRedirect;
