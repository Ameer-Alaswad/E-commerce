import { NavigateFunction } from "react-router-dom";

export type AppContextChildren = {
    children: React.ReactNode
}

export type userSignedIn = {
    _id: string
    name: string
    email: string
    isAdmin: boolean
    token: string
}
export type AppContextTypes = {
    userOptionsOpen: HTMLElement | null
    setUserOptionsOpen: React.Dispatch<React.SetStateAction<HTMLElement | null>>
    userOptionsOpenMobile: HTMLElement | null
    setUserOptionsOpenMobile: React.Dispatch<React.SetStateAction<HTMLElement | null>>
    isMenuOpen: boolean
    isMobileMenuOpen: boolean
    handleMobileMenuClose: () => void;
    handleMenuClose: () => void;
    handleMobileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
    handleNavigation: (text: string, navigate: NavigateFunction) => void;
    getMenuClickHandler: (path: string, navigate: NavigateFunction) => () => void;
    handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void
}
export type UserData = {
    _id: string;
    name: string;
    email: string;
    isAdmin: boolean;
    token: string;
}
