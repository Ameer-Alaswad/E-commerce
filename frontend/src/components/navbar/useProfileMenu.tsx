import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartContext } from '../../contexts/shopping-cart-context/shoppingCartContext';

const useProfileMenu = () => {

    const navigate = useNavigate();

    const shoppingCartContext = useContext(ShoppingCartContext);
    const { userSignin, setUserSignin, setShippingAddressData, setCartItems, setPaymentMethod } = shoppingCartContext;

    const [userOptionsOpen, setUserOptionsOpen] = useState<HTMLElement | null>(null);
    const [userOptionsOpenMobile, setUserOptionsOpenMobile] = useState<HTMLElement | null>(null);

    const isMenuOpen = Boolean(userOptionsOpen);
    const isMobileMenuOpen = Boolean(userOptionsOpenMobile);


    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {

        setUserOptionsOpen(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setUserOptionsOpen(null);
        setUserOptionsOpenMobile(null);
    };

    const handleMenuClose = () => {
        setUserOptionsOpen(null);
        setUserOptionsOpenMobile(null);
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) =>
        setUserOptionsOpenMobile(event.currentTarget);


    const handleNavigation = (text: string) => {
        navigate(text)
        handleMenuClose();
    }

    const getMenuClickHandler = (path: string) => {
        return () => handleNavigation(path);
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
        setUserOptionsOpen(null);
        handleMobileMenuClose();
        navigate('/user/signin');
    };

    return {
        userOptionsOpen,
        userOptionsOpenMobile,
        isMenuOpen,
        isMobileMenuOpen,
        handleProfileMenuOpen,
        handleMobileMenuClose,
        handleMenuClose,
        handleMobileMenuOpen,
        handleSignOut,
        navigate,
        userSignin,
        getMenuClickHandler
    };
};

export default useProfileMenu;