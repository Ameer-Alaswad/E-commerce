// axios 
import axios from "axios";
import { toast } from "react-toastify"
// types 


export const fetchOrder = async (URL: string, userSigned: any) => {
    try {
        const { data } = await axios.get(URL, {
            headers: {
                authorization: `Bearer ${userSigned?.token}`
            }
        });
        return data
    } catch (error: any) {
        toast.error(error?.message)
    }

};