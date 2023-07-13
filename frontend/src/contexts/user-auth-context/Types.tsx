import { NavigateFunction } from "react-router-dom";

export type userSignedIn = {
    _id: string
    name: string
    email: string
    isAdmin: boolean
    token: string
}
export type UserAuth = {
    userSignedIn: userSignedIn | null
    setUserSignedIn: React.Dispatch<React.SetStateAction<userSignedIn | null>>
    handleSignOut: (navigate: NavigateFunction) => void;

}
