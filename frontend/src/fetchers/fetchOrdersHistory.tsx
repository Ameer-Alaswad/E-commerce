import axios from "axios";
import { toast } from "react-toastify";

export const fetchOrderHistory = async (
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    , URL: string,
    userSigned: any
) => {
    try {
        setLoading(true);
        const { data } = await axios.get(URL, {
            headers: { Authorization: `Bearer ${userSigned?.token}` },
        });
        return data
    } catch (error) {
        toast.error('Something went wrong!');
    } finally {
        setLoading(false);
    }
};