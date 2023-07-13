import { useContext } from "react";
import { MenuSettingsContext } from "../../contexts/menu-settings-context";

const useMenuSettingsContext = () => {
    const {
        userOptionsOpen,
        setUserOptionsOpen,
        isMenuOpen,
        handleProfileMenuOpen,
        handleMenuClose,
    } = useContext(MenuSettingsContext);
    return {
        userOptionsOpen,
        setUserOptionsOpen,
        isMenuOpen,
        handleProfileMenuOpen,
        handleMenuClose,
    };
};

export default useMenuSettingsContext;
