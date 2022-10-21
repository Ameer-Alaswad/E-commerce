import axios from "axios";
import { productsType } from "../components/display-products/displayProductsInterface";

export const fetchProducts = async (
    setProducts: (value: productsType[]) => void,
    SetNoProductsError: (value: string) => void,
    setLoading: (value: string) => void
) => {
    setLoading("Loading");
    try {
        const { data } = await axios.get("/api/products");
        setLoading("");
        setProducts(data);
    } catch (error) {
        setLoading("");
        SetNoProductsError("something went wrong");
    }
};
