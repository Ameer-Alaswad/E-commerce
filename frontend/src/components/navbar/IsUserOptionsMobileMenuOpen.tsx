import { IconButton } from '@mui/material'
import MoreIcon from "@mui/icons-material/MoreVert";
import { useContext } from 'react';
import { ShoppingCartContext } from '../../contexts/shopping-cart-context/shoppingCartContext';



const IsUserOptionsMobileMenuOpen = () => {
    const shoppingCartContext = useContext(ShoppingCartContext);
    const { handleMobileMenuOpen } = shoppingCartContext;
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