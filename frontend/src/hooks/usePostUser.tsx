import { useMutation, UseMutationResult } from "react-query";
import axios from "axios";
import { userSignedIn } from "../contexts/app-context/Types";
import { NavigateFunction } from "react-router-dom";

type User =
    | {
        email: string;
        password: string;
    }
    | {
        name: string;
        email: string;
        password: string;
    };

interface UseMutateUserArgs {
    URL: string;
    setUserSignedIn: React.Dispatch<React.SetStateAction<userSignedIn | null>>;
    navigate: NavigateFunction;
    redirect: string;
}

const useMutateUser = ({
    URL,
    setUserSignedIn,
    navigate,
    redirect,
}: UseMutateUserArgs): UseMutationResult<userSignedIn, unknown, User> => {

    const mutateUser = useMutation<userSignedIn, unknown, User>(
        async (userData: User) => {
            const { data } = await axios.post<userSignedIn>(URL, userData);
            return data;
        },
        {
            onSuccess: (data) => {
                setUserSignedIn(data);
                localStorage.setItem("userData", JSON.stringify(data));
                navigate(redirect || "/");
            },
            onError: (error) => {
                console.error("Error occurred:", error);
            },
        }
    );

    return mutateUser;
};

export default useMutateUser;
