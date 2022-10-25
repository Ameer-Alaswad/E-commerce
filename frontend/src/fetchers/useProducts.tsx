import { useQuery } from "react-query";
import { fetchProducts } from "./fetch";
const useProducts = (URL: string) => {
    const { isError, isLoading, data } = useQuery(["products"], () =>
        fetchProducts(URL)
    );
    return { isError, isLoading, data }
}
export default useProducts



