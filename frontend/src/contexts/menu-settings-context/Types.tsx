
export type MenuSettingsChildren = {
    children: React.ReactNode
}

export type MenuSettingsTypes = {
    userOptionsOpen: HTMLElement | null
    setUserOptionsOpen: React.Dispatch<React.SetStateAction<HTMLElement | null>>
    isMenuOpen: boolean
    handleMenuClose: () => void;
    handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void

}