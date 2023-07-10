
import { IconButton } from '@mui/material'
import MoreIcon from "@mui/icons-material/MoreVert";
import useAppContext from '../../hooks/useAppContext';

const UserSettingsMobileButton = () => {

    const { handleMobileMenuOpen } = useAppContext()

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