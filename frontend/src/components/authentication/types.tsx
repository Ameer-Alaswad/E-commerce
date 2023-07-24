import { NavigateFunction } from "react-router-dom";
import { userSignedIn } from "../../contexts/app-context/Types";

export interface User {
    name: string;
    email: string;
    password: string;
}

export interface UseMutateUserArgs {
    URL: string;
    setUserSignedIn: React.Dispatch<React.SetStateAction<userSignedIn | null>>;
    navigate: NavigateFunction;
    redirect: string;
}