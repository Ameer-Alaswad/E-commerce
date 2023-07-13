import { useContext } from 'react'
import { MenuSettingsMobileContext } from '../../contexts/menu-settings-mobile-context'

const useMenuSettingsMobileContext = () => {
    const {
        userOptionsOpenMobile,
        setUserOptionsOpenMobile,
        isMobileMenuOpen,
        handleMobileMenuClose,
        handleMobileMenuOpen,
    } = useContext(MenuSettingsMobileContext)
    return {
        userOptionsOpenMobile,
        setUserOptionsOpenMobile,
        isMobileMenuOpen,
        handleMobileMenuClose,
        handleMobileMenuOpen,
    }
}

export default useMenuSettingsMobileContext