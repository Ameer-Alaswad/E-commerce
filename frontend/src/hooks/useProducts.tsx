// useQuery 
import { useQuery } from "react-query";
// fetch 
import { fetchProducts } from "../fetchers/fetchProducts";

const useProducts = (URL: string) => {

    const { isError, isLoading, data } = useQuery(["products"], () =>
        fetchProducts(URL)
    );
    return { isError, isLoading, data }

}
export default useProducts



