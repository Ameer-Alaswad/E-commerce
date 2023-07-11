import { MouseEvent, createContext, useState } from "react";
import { MenuSettingsChildren, MenuSettingsTypes } from "./Types";

export const MenuSettingsContext = createContext({} as MenuSettingsTypes);

const MenuSettingsContextProvider = ({ children }: MenuSettingsChildren) => {

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
