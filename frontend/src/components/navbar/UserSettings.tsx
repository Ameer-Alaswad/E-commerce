import { Box } from "@mui/material";
import UserSettingsMobileButton from "./UserSettingsMobileButton";
import UserSettingsMobileMenu from "./UserSettingsMobileMenu";
import {
    cartAndUserMenuDisplayStyles,
    mobileMenuDisplayStyles,
} from "./styles";
import UserSettingsButton from "./UserSettingsButton";
import UserSettingsMenu from "./UserSettingsMenu";
import useMenuSettingsContext from "../../hooks/context/useMenuSettingsContext";
import useMenuSettingsMobileContext from "../../hooks/context/useMenuSettingsMobileContext";


interface UserSettingsProps {
    userName: string;
}

const UserSettings: React.FC<UserSettingsProps> = ({ userName }) => {
    const { isMenuOpen } = useMenuSettingsContext();
    const { isMobileMenuOpen } = useMenuSettingsMobileContext();
    return (
        <>
            <Box sx={ { display: { ...cartAndUserMenuDisplayStyles } } }>
                <UserSettingsButton userName={ userName } />
                <UserSettingsMenu isMenuOpen={ isMenuOpen } />
            </Box>
            <Box sx={ { display: { ...mobileMenuDisplayStyles } } }>
                <UserSettingsMobileButton />
                <UserSettingsMobileMenu isMobileMenuOpen={ isMobileMenuOpen } />
            </Box>
        </>
    );
};

export default UserSettings;
