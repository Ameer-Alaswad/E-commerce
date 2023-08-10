// axios 
import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { userSignedIn } from "../contexts/user-auth-context/Types";
import { toast } from "react-toastify"
// types 
type user = {
    email: string
    password: string
} | {
    name: string
    email: string
    password: string
}

export const postUser = async (URL: string, userData: user,
    setUserSignedIn: React.Dispatch<React.SetStateAction<userSignedIn | null>>, navigate: NavigateFunction, redirect: string) => {

    try {
        const { data } = await axios.post(URL, userData);
        setUserSignedIn(data)
        localStorage.setItem('userData', JSON.stringify(data))
        navigate(redirect || "/")
    } catch (error: any) {
        toast.error('wrong email or password')
    }

};
