import { useContext } from 'react'
import { AppContext } from '../contexts/app-context/AppContext'

const useAppContext = () => {
    const {

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