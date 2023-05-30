import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartContext } from '../../contexts/shopping-cart-context/shoppingCartContext';

const useProfileMenu = () => {

    const navigate = useNavigate();

    const shoppingCartContext = useContext(ShoppingCartContext);
    const { userSignin, setUserSignin, setShippingAddressData, setCartItems, setPaymentMethod } = shoppingCartContext;

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<HTMLElement | null>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setAnchorEl(null);
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleSignOut = () => {
        localStorage.removeItem('userData');
        localStorage.removeItem('shippingCardAddress');
        setShippingAddressData({
            fullName: '',
            address: '',
            city: '',
            postalCode: '',
            country: ''
        });
        setCartItems([]);
        setUserSignin(null);
        setPaymentMethod('');
        setAnchorEl(null);
        handleMobileMenuClose();
        navigate('/user/signin');
    };

    return {
        anchorEl,
        mobileMoreAnchorEl,
        isMenuOpen,
        isMobileMenuOpen,
        handleProfileMenuOpen,
        handleMobileMenuClose,
        handleMenuClose,
        handleMobileMenuOpen,
        handleSignOut,
        navigate,
        userSignin,

    };
};

export default useProfileMenu;