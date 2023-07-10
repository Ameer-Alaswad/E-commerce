import { Box } from "@mui/material";
import UserSettingsMobileButton from "./UserSettingsMobileButton";
import UserSettingsMobileMenu from "./UserSettingsMobileMenu";
import { cartAndUserMenuDisplayStyles, mobileMenuDisplayStyles } from "./styles";
import UserSettingsButton from "./UserSettingsButton"
import UserSettingsMenu from "./UserSettingsMenu";
import useAppContext from "../../hooks/useAppContext";

interface UserSettingsProps {
    userName: string;
}

const UserSettings: React.FC<UserSettingsProps> = ({ userName }) => {

    const {
        isMenuOpen,
        isMobileMenuOpen
    } = useAppContext()


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
