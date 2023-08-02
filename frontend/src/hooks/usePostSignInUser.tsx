import axios from "axios";
import { useMutation, UseMutationResult } from "react-query";
import { userSignedIn } from "../contexts/app-context/Types";
import { HOME_PATH } from "../components/constants/path";
import { UseMutateUserArgs, UserData } from "../components/authentication/types";
import { handleAxiosErrorMessages } from "../components/authentication/utils";

const usePostSignInUser = ({
    URL,
    setUserSignedIn,
    navigate,
    redirectionRoute,
}: UseMutateUserArgs): UseMutationResult<userSignedIn, unknown, UserData> => {

    const mutateUser = useMutation<userSignedIn, unknown, UserData>(
        async (postUserSignUpData: UserData) => {
            const { data } = await axios.post<userSignedIn>(URL, postUserSignUpData);
            return data;
        },
        {
            onSuccess: (data) => {
                setUserSignedIn(data);
                localStorage.setItem("userData", JSON.stringify(data));
                navigate(redirectionRoute || HOME_PATH);
            },
            onError: (error: unknown) => {
                handleAxiosErrorMessages(error, "signin")
            },
        }
    );
    return mutateUser;
};
export default usePostSignInUser;
