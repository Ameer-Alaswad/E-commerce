import { IconButton } from '@mui/material'
import MoreIcon from "@mui/icons-material/MoreVert";

interface IsUserOptionsMobileMenuOpenProps {
    handleMobileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
}

const IsUserOptionsMobileMenuOpen: React.FC<IsUserOptionsMobileMenuOpenProps> = ({ handleMobileMenuOpen }) => {
    const mobileMenuId = "primary-search-account-menu-mobile";

    return (
        <>
            <IconButton
                size="large"
                aria-label="show more"
                aria-controls={ mobileMenuId }
                aria-haspopup="true"
                onClick={ handleMobileMenuOpen }
                color="inherit"
            >
                <MoreIcon />
            </IconButton>
        </>
    )
}

export default IsUserOptionsMobileMenuOpen