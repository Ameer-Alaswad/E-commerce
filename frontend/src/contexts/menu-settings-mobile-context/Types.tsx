export type MenuSettingsMobileTypes = {
    userOptionsOpenMobile: HTMLElement | null
    setUserOptionsOpenMobile: React.Dispatch<React.SetStateAction<HTMLElement | null>>
    isMobileMenuOpen: boolean
    handleMobileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
    handleMobileMenuClose: () => void;
}