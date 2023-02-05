// axios 
import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { userSignin } from "../contexts/shopping-cart-context/shoppingCartContextTypes";
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
    setUserSignin: React.Dispatch<React.SetStateAction<userSignin | null>>, navigate: NavigateFunction, redirect: string) => {
    console.log(userData);

    try {
        const { data } = await axios.post(URL, userData);
        setUserSignin(data)
        localStorage.setItem('userData', JSON.stringify(data))
        navigate(redirect || "/")
    } catch (error: any) {
        console.log(error);
        toast.error('wrong email or password')
    }

};
