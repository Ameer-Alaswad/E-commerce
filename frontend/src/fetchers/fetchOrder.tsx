// axios 
import axios from "axios";
import { toast } from "react-toastify"
// types 


export const fetchOrder = async (URL: string, userSigned: any, setOrderData: any) => {
    try {
        const { data } = await axios.get(URL, {
            headers: {
                authorization: `Bearer ${userSigned?.token}`
            }
        });
        // console.log("Fetched order data:", data); // Add this line
        return setOrderData(data)
    } catch (error: any) {
        toast.error(error?.message)
    }

};