import { MouseEvent, createContext, useState } from "react";
import { MenuSettingsMobileTypes } from "./Types";
import { ContextChildren } from "../app-context/Types";

export const MenuSettingsMobileContext = createContext(
    {} as MenuSettingsMobileTypes
);

const MenuSettingsMobileContextProvider = ({ children }: ContextChildren) => {
    const [userOptionsOpenMobile, setUserOptionsOpenMobile] =
        useState<HTMLElement | null>(null);

    const isMobileMenuOpen = Boolean(userOptionsOpenMobile);

    const handleMobileMenuClose = () => {
        setUserOptionsOpenMobile(null);
    };

    const handleMobileMenuOpen = (event: MouseEvent<HTMLElement>) => {
        const menuButtonElement = event.currentTarget;
        setUserOptionsOpenMobile(menuButtonElement);
    };
    return (
        <MenuSettingsMobileContext.Provider
            value={ {
                userOptionsOpenMobile,
                setUserOptionsOpenMobile,
                isMobileMenuOpen,
                handleMobileMenuClose,
                handleMobileMenuOpen,
            } }
        >
            { children }
        </MenuSettingsMobileContext.Provider>
    );
};

export default MenuSettingsMobileContextProvider;
