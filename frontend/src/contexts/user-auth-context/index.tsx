import { createContext, useState } from "react";
import { UserAuth, UserAuthChildren, userSignedIn } from "./Types";
import {
    initialShippingAddressData,
    userData,
} from "../app-context/data";
import { NavigateFunction } from "react-router-dom";
import useAppContext from "../../hooks/useAppContext";
import { SIGNIN_PATH } from "../../components/constants/path";
import useShoppingCartContext from "../../hooks/useShoppingCartContext";
import useCheckoutContext from "../../hooks/useCheckoutContext";

export const UserAuthContext = createContext({} as UserAuth);

const UserAuthContextProvider = ({ children }: UserAuthChildren) => {
    const {
        setUserOptionsOpen,
        handleMobileMenuClose,
    } = useAppContext();
    const { setShippingAddressData,
        setPaymentMethod } = useCheckoutContext()
    const {
        setShoppingCartItems
    } = useShoppingCartContext();

    const [userSignedIn, setUserSignedIn] = useState<userSignedIn | null>(
        userData
    );

    const handleSignOut = (navigate: NavigateFunction) => {
        localStorage.removeItem("userData");
        localStorage.removeItem("shippingCardAddress");
        setShippingAddressData(initialShippingAddressData);
        setShoppingCartItems([]);
        setUserSignedIn(null);
        setPaymentMethod("");
        setUserOptionsOpen(null);
        handleMobileMenuClose();
        navigate(SIGNIN_PATH);
    };

    return (
        <UserAuthContext.Provider
            value={ {
                userSignedIn,
                setUserSignedIn,
                handleSignOut,
            } }
        >
            { children }
        </UserAuthContext.Provider>
    );
};

export default UserAuthContextProvider;
