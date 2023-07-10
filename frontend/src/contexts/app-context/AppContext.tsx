// This Component requires refactoring.
import { createContext, useState } from "react";

import { NavigateFunction } from "react-router-dom";
import {
    Product,
    AppContextTypes,
    AppContextChildren,
    userSignedIn,
    ShippingAddressDataType,
    OrderData,
    UserData,
} from "./AppContextTypes";
import { SIGNIN_PATH } from "../../components/constants/path";

const addressDataInStorage = JSON.parse(
    localStorage.getItem("shippingCardAddress") || "{}"
);

const paymentMethodInStorage = JSON.parse(
    localStorage.getItem("paymentMethod") || "{}"
);

const UserDataStorage: string | null = localStorage.getItem("userData");
const userData: UserData | null = UserDataStorage
    ? JSON.parse(UserDataStorage)
    : null;

export const AppContext = createContext({} as AppContextTypes);

export const AppContextProvider = ({ children }: AppContextChildren) => {
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [progressStep, setProgressStep] = useState<number>(0);
    const [orderData, setOrderData] = useState<OrderData | null>(null);
    const [userSignedIn, setUserSignedIn] = useState<userSignedIn | null>(userData);

    const [paymentMethod, setPaymentMethod] = useState<string>(
        paymentMethodInStorage || ""
    );
    /////////////
    const [userOptionsOpen, setUserOptionsOpen] = useState<HTMLElement | null>(
        null
    );
    const [userOptionsOpenMobile, setUserOptionsOpenMobile] =
        useState<HTMLElement | null>(null);

    const isMenuOpen = Boolean(userOptionsOpen);
    const isMobileMenuOpen = Boolean(userOptionsOpenMobile);
    ////////////////////////////
    const [shippingAddressData, setShippingAddressData] =
        useState<ShippingAddressDataType>(
            addressDataInStorage || {
                fullName: "",
                address: "",
                city: "",
                postalCode: "",
                country: "",
            }
        );

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        console.log(isMenuOpen);

        setUserOptionsOpen(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setUserOptionsOpen(null);
        setUserOptionsOpenMobile(null);
    };

    const handleMenuClose = () => {
        setUserOptionsOpen(null);
        setUserOptionsOpenMobile(null);
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) =>
        setUserOptionsOpenMobile(event.currentTarget);


    const handleNavigation = (text: string, navigate: NavigateFunction) => {
        navigate(text);
        handleMenuClose();
    };

    const getMenuClickHandler = (path: string, navigate: NavigateFunction) => {
        return () => handleNavigation(path, navigate);
    };

    const handleSignOut = (navigate: NavigateFunction) => {
        localStorage.removeItem('userData');
        localStorage.removeItem('shippingCardAddress');
        setShippingAddressData({
            fullName: '',
            address: '',
            city: '',
            postalCode: '',
            country: ''
        });
        setCartItems([]);
        setUserSignedIn(null);
        setPaymentMethod('');
        setUserOptionsOpen(null);
        handleMobileMenuClose();
        navigate(SIGNIN_PATH);
    };
    return (
        <AppContext.Provider
            value={ {
                cartItems,
                setCartItems,
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
                handleSignOut
            } }
        >
            { children }
        </AppContext.Provider>
    );
};
