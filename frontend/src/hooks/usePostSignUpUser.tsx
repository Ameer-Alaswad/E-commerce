import axios from "axios";
import { useMutation, UseMutationResult } from "react-query";
import { userSignedIn } from "../contexts/app-context/Types";
import { HOME_PATH } from "../components/constants/path";
import { UseMutateUserArgs, User } from "../components/authentication/types";
import { handleAxiosErrorMessages } from "../components/authentication/utils";

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
                handleAxiosErrorMessages(error, "signup")
            },
        }
    );
    return mutateUser;
};
export default usePostSignUpUser;
