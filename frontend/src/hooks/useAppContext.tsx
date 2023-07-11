import { useContext } from 'react'
import { AppContext } from '../contexts/app-context/AppContext'

const useAppContext = () => {
    const {
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
    } = useContext(AppContext)
    return {
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
    }
}

export default useAppContext