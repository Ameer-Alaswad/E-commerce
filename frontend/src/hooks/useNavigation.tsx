import { useNavigate } from "react-router-dom";
import {
    ORDERS_HISTORY_PATH,
    SHOPPING_CART_PATH,
    SIGNIN_PATH,
    UPDATE_USER_PATH,
} from "../components/constants/path";

const useCustomNavigate = () => {
    const navigate = useNavigate();
    const navigateShoppingCart = () => navigate(SHOPPING_CART_PATH);
    const navigateUserSignIn = () => navigate(SIGNIN_PATH);
    const navigateUpdateUser = () => navigate(UPDATE_USER_PATH);
    const navigateOrdersHistory = () => navigate(ORDERS_HISTORY_PATH);

    return {
        navigateShoppingCart,
        navigateUserSignIn,
        navigate,
        navigateUpdateUser,
        navigateOrdersHistory,
    };
};

export default useCustomNavigate;
