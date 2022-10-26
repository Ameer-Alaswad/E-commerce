// axios 
import axios from "axios";
// types 
import { productsType } from "../components/display-products/displayProductsInterface";

export const fetchProducts = async (URL: string): Promise<productsType[]> => {

    try {
        const { data } = await axios.get(URL);
        return await data
    } catch (error: any) {
        throw new Error(error)
    }

};
