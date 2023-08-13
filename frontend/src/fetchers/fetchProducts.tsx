import axios from "axios";
import { toast } from "react-toastify";
import { productsType } from "../components/display-products/Types";

export const fetchProducts = async (URL: string): Promise<productsType[]> => {
    try {
        const { data } = await axios.get(URL);
        return data;
    } catch (error: any) {
        const errorMessage =
            error.response?.data?.message ||
            "An error occurred while fetching products.";
        toast.error(errorMessage);
    }
    return [];
};
