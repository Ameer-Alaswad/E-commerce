import { useQuery } from "react-query";
import { fetchProducts } from "../fetchers/fetchProducts";

const useProductsFetch = (URL: string) => {

    const { isError, isLoading, data } = useQuery(["products"], () =>
        fetchProducts(URL)
    );
    return { isError, isLoading, data }

}
export default useProductsFetch



