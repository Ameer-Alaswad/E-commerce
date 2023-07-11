import { createContext, useState, MouseEvent } from "react";

import { NavigateFunction } from "react-router-dom";
import {
    Product,
    AppContextTypes,
    AppContextChildren,
    userSignedIn,
    ShippingAddressDataType,
    OrderData,
} from "./AppContextTypes";

import { SIGNIN_PATH } from "../../components/constants/path";

import {
    addressDataInStorage,
    initialShippingAddressData,
    paymentMethodInStorage,
    userData,
} from "./AppContextData";

export const AppContext = createContext({} as AppContextTypes);

export const AppContextProvider = ({ children }: AppContextChildren) => {


    const [shoppingCartItems, setShoppingCartItems] = useState<Product[]>([]);
    const [progressStep, setProgressStep] = useState<number>(0);
    const [orderData, setOrderData] = useState<OrderData | null>(null);
    const [userSignedIn, setUserSignedIn] = useState<userSignedIn | null>(
        userData
    );

    const [paymentMethod, setPaymentMethod] = useState<string>(
        paymentMethodInStorage || ""
    );

    const [userOptionsOpen, setUserOptionsOpen] = useState<HTMLElement | null>(
        null
    );
    const [userOptionsOpenMobile, setUserOptionsOpenMobile] =
        useState<HTMLElement | null>(null);

    const isMenuOpen = Boolean(userOptionsOpen);
    const isMobileMenuOpen = Boolean(userOptionsOpenMobile);

    const [shippingAddressData, setShippingAddressData] =
        useState<ShippingAddressDataType>(
            addressDataInStorage || initialShippingAddressData
        );

    const handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) => {
        const menuButtonElement = event.currentTarget;
        setUserOptionsOpen(menuButtonElement);
    };

    const handleMobileMenuClose = () => {
        setUserOptionsOpen(null);
        setUserOptionsOpenMobile(null);
    };

    const handleMenuClose = () => {
        setUserOptionsOpen(null);
        setUserOptionsOpenMobile(null);
    };

    const handleMobileMenuOpen = (event: MouseEvent<HTMLElement>) => {
        const menuButtonElement = event.currentTarget;
        setUserOptionsOpenMobile(menuButtonElement);
    }


    const handleNavigation = (text: string, navigate: NavigateFunction) => {
        navigate(text);
        handleMenuClose();
    };

    const getMenuClickHandler = (path: string, navigate: NavigateFunction) => {
        return () => handleNavigation(path, navigate);
    };

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
        <AppContext.Provider
            value={ {
                shoppingCartItems,
                setShoppingCartItems,
                userSignedIn,
                setUserSignedIn,
                shippingAddressData,
                setShippingAddressData,
                progressStep,
                setProgressStep,
                setPaymentMethod,
                paymentMethod,
                orderData,
                setOrderData,
                userOptionsOpen,
                setUserOptionsOpen,
                userOptionsOpenMobile,
                setUserOptionsOpenMobile,
                isMenuOpen,
                isMobileMenuOpen,
                handleMobileMenuClose,
                handleMenuClose,
                handleMobileMenuOpen,
                handleNavigation,
                getMenuClickHandler,
                handleProfileMenuOpen,
                handleSignOut,
            } }
        >
            { children }
        </AppContext.Provider>
    );
};
