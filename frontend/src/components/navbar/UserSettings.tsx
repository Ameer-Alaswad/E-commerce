import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/shopping-cart-context/shoppingCartContext";
import { Box } from "@mui/material";
import UserSettingsMobileButton from "./UserSettingsMobileButton";
import UserSettingsMobileMenu from "./UserSettingsMobileMenu";
import { cartAndUserMenuDisplayStyles, mobileMenuDisplayStyles } from "./styles";
import UserSettingsButton from "./UserSettingsButton"
import UserSettingsMenu from "./UserSettingsMenu";

interface UserSettingsProps {
    userName: string;
}

const UserSettings: React.FC<UserSettingsProps> = ({ userName }) => {

    const {
        isMenuOpen,
        isMobileMenuOpen
    } = useContext(ShoppingCartContext);


    return (
        <>
            <Box sx={ { display: { ...cartAndUserMenuDisplayStyles } } }>
                <UserSettingsButton userName={ userName } />
                <UserSettingsMenu isMenuOpen={ isMenuOpen } />
            </Box >
            <Box sx={ { display: { ...mobileMenuDisplayStyles } } }>
                <UserSettingsMobileButton />
                <UserSettingsMobileMenu isMobileMenuOpen={ isMobileMenuOpen } />
            </Box>
        </>
    );
};

export default UserSettings;
