
import { IconButton } from '@mui/material'
import MoreIcon from "@mui/icons-material/MoreVert";

import useMenuSettingsMobileContext from '../../hooks/useMenuSettingsMobileContext';

const UserSettingsMobileButton = () => {

    const { handleMobileMenuOpen } = useMenuSettingsMobileContext()

    return (
        <>
            <IconButton
                size="large"
                aria-label="show more"
                aria-haspopup="true"
                onClick={ handleMobileMenuOpen }
                color="inherit"
            >
                <MoreIcon />
            </IconButton>
        </>
    )
}

export default UserSettingsMobileButton