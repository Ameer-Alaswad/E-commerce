// axios
import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { userSignedIn } from "../contexts/user-auth-context/Types";
import { toast } from "react-toastify";
// types
type user =
    | {
        email: string;
        password: string;
    }
    | {
        name: string;
        email: string;
        password: string;
    };
interface kalb {
    URL: string,
    userData: user,
    setUserSignedIn: React.Dispatch<React.SetStateAction<userSignedIn | null>>,
    navigate: NavigateFunction,
    redirect: string
}
export const postUser = async ({
    URL,
    userData,
    setUserSignedIn,
    navigate,
    redirect
}: kalb) => {
    try {
        const { data } = await axios.post(URL, userData);
        setUserSignedIn(data);
        localStorage.setItem("userData", JSON.stringify(data));
        navigate(redirect || "/");
    } catch (error: any) {
        toast.error("wrong email or password");
    }
};
