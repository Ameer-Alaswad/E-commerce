import { MouseEvent, createContext, useState } from "react";
import { MenuSettingsTypes } from "./Types";
import { ContextChildren } from "../app-context/Types";

export const MenuSettingsContext = createContext({} as MenuSettingsTypes);

const MenuSettingsContextProvider = ({ children }: ContextChildren) => {

    const [userOptionsOpen, setUserOptionsOpen] = useState<HTMLElement | null>(
        null
    );
    const isMenuOpen = Boolean(userOptionsOpen);
    const handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) => {
        const menuButtonElement = event.currentTarget;
        setUserOptionsOpen(menuButtonElement);
    };
    const handleMenuClose = () => {
        setUserOptionsOpen(null);
    };
    return (
        <MenuSettingsContext.Provider
            value={ {
                userOptionsOpen,
                setUserOptionsOpen,
                isMenuOpen,
                handleProfileMenuOpen,
                handleMenuClose,
            } }
        >
            { children }
        </MenuSettingsContext.Provider>
    );
};

export default MenuSettingsContextProvider;
