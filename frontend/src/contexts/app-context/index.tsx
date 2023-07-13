import { createContext } from "react";

import { NavigateFunction } from "react-router-dom";
import {
    AppContextTypes,
    ContextChildren,
} from "./Types";
import useMenuSettingsContext from "../../hooks/context/useMenuSettingsContext";
import useMenuSettingsMobileContext from "../../hooks/context/useMenuSettingsMobileContext";


export const AppContext = createContext({} as AppContextTypes);

export const AppContextProvider = ({ children }: ContextChildren) => {

    const { handleMenuClose } = useMenuSettingsContext()
    const { handleMobileMenuClose } = useMenuSettingsMobileContext()

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
                handleNavigation,
                getMenuClickHandler,
            } }
        >
            { children }
        </AppContext.Provider>
    );
};
