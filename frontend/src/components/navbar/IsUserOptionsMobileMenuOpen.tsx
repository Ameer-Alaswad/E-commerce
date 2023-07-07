import { useContext } from 'react';
import { ShoppingCartContext } from '../../contexts/shopping-cart-context/shoppingCartContext';

import { IconButton } from '@mui/material'
import MoreIcon from "@mui/icons-material/MoreVert";

const IsUserOptionsMobileMenuOpen = () => {

    const shoppingCartContext = useContext(ShoppingCartContext);
    const { handleMobileMenuOpen } = shoppingCartContext;

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

export default IsUserOptionsMobileMenuOpen