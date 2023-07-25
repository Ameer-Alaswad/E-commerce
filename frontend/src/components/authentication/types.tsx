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
    redirectionRoute: string;
}
export type SignUpFormProps = {
    handleUserSignUpSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
    handleNavigate: () => void;
};