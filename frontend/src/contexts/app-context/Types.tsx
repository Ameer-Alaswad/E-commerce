import { NavigateFunction } from "react-router-dom";

export type ContextChildren = {
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
    handleNavigation: (text: string, navigate: NavigateFunction) => void;
    getMenuClickHandler: (path: string, navigate: NavigateFunction) => () => void;
}
export type UserData = {
    _id: string;
    name: string;
    email: string;
    isAdmin: boolean;
    token: string;
}
