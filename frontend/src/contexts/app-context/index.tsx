import { createContext, useState, MouseEvent } from "react";

import { NavigateFunction } from "react-router-dom";
import {
    AppContextTypes,
    AppContextChildren,
} from "./Types";

export const AppContext = createContext({} as AppContextTypes);

export const AppContextProvider = ({ children }: AppContextChildren) => {

    const [userOptionsOpen, setUserOptionsOpen] = useState<HTMLElement | null>(
        null
    );
    const [userOptionsOpenMobile, setUserOptionsOpenMobile] =
        useState<HTMLElement | null>(null);

    const isMenuOpen = Boolean(userOptionsOpen);
    const isMobileMenuOpen = Boolean(userOptionsOpenMobile);

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
    };

    const handleNavigation = (text: string, navigate: NavigateFunction) => {
        navigate(text);
        handleMenuClose();
        handleMobileMenuClose()
    };

    const getMenuClickHandler = (path: string, navigate: NavigateFunction) => {
        return () => handleNavigation(path, navigate);
    };

    return (
        <AppContext.Provider
            value={ {
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
            } }
        >
            { children }
        </AppContext.Provider>
    );
};
