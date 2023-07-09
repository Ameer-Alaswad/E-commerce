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
    // Material UI will decide using it's styles to decide what settings to be displayed
    return (
        <>
            <Box sx={ { display: { ...cartAndUserMenuDisplayStyles } } }>
                <UserSettingsButton userName={ userName } />
                <UserSettingsMenu />
            </Box >
            <Box sx={ { display: { ...mobileMenuDisplayStyles } } }>
                <UserSettingsMobileButton />
                <UserSettingsMobileMenu />
            </Box>
        </>
    );
};

export default UserSettings;
