import axios from "axios";
import { useMutation, UseMutationResult } from "react-query";
import { userSignedIn } from "../contexts/app-context/Types";
import { NavigateFunction } from "react-router-dom";
import { HOME_PATH } from "../components/constants/path";
import { toast } from "react-toastify";

interface User {
    name: string;
    email: string;
    password: string;
}

interface UseMutateUserArgs {
    URL: string;
    setUserSignedIn: React.Dispatch<React.SetStateAction<userSignedIn | null>>;
    navigate: NavigateFunction;
    redirect: string;
}

const usePostSignUpUser = ({
    URL,
    setUserSignedIn,
    navigate,
    redirect,
}: UseMutateUserArgs): UseMutationResult<userSignedIn, unknown, User> => {

    const mutateUser = useMutation<userSignedIn, unknown, User>(
        async (postUserSignUpData: User) => {
            const { data } = await axios.post<userSignedIn>(URL, postUserSignUpData);
            return data;
        },
        {
            onSuccess: (data) => {
                setUserSignedIn(data);
                localStorage.setItem("userData", JSON.stringify(data));
                navigate(redirect || HOME_PATH);
            },
            onError: (error: unknown) => {
                if (axios.isAxiosError(error)) {
                    if (error.response) {
                        toast.error("Sign-up failed: " + error.response.data.message);
                    } else if (error.request) {
                        toast.error("Network error: " + error.message);
                    } else {
                        toast.error("Error: " + error.message);
                    }
                } else {
                    const errorMessage = (error as Error).message || "Unknown error";
                    toast.error("Error occurred: " + errorMessage);
                }
            },
        }
    );

    return mutateUser;
};

export default usePostSignUpUser;
