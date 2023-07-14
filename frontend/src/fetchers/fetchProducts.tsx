import axios from "axios";

import { productsType } from "../components/display-products/Types";

export const fetchProducts = async (URL: string): Promise<productsType[]> => {
    try {
        const { data } = await axios.get(URL);
        return data;
    } catch (error: any) {
        throw new Error(error);
    }
};
