import { useContext } from 'react'
import { AppContext } from '../contexts/app-context/AppContext'

const useAppContext = () => {
    const {
        cartItems,
        setCartItems,
        userSignedIn,
        setUserSignedIn,
        shippingAddressData,
        setShippingAddressData,
        progressStep,
        setProgressStep,
        setPaymentMethod,
        paymentMethod,
        orderData,
        setOrderData,
        userOptionsOpen,
        setUserOptionsOpen,
        userOptionsOpenMobile,
        setUserOptionsOpenMobile,
        isMenuOpen,
        isMobileMenuOpen,
        handleMobileMenuClose,
        handleMenuClose,
        handleMobileMenuOpen,
        handleNavigation,
        getMenuClickHandler,
        handleProfileMenuOpen,
        handleSignOut
    } = useContext(AppContext)
    return {
        cartItems,
        setCartItems,
        userSignedIn,
        setUserSignedIn,
        shippingAddressData,
        setShippingAddressData,
        progressStep,
        setProgressStep,
        setPaymentMethod,
        paymentMethod,
        orderData,
        setOrderData,
        userOptionsOpen,
        setUserOptionsOpen,
        userOptionsOpenMobile,
        setUserOptionsOpenMobile,
        isMenuOpen,
        isMobileMenuOpen,
        handleMobileMenuClose,
        handleMenuClose,
        handleMobileMenuOpen,
        handleNavigation,
        getMenuClickHandler,
        handleProfileMenuOpen,
        handleSignOut
    }
}

export default useAppContext