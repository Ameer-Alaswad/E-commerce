import useProductsFetch from "../../hooks/useProductsFetch";
import DisplayProductsList from "./DisplayProductsList";
import AnimatedLoadingIcon from "../AnimatedLoadingIcon";
import ProductsNotFoundAlert from "../Error";
import { PRODUCTS_PATH } from "../constants/path";

const DisplayProducts = () => {
    const { isError, isLoading, data } = useProductsFetch(PRODUCTS_PATH);
    return (
        <>
            { isLoading && <AnimatedLoadingIcon /> }
            { isError && <ProductsNotFoundAlert /> }
            { data && <DisplayProductsList data={ data } /> }
        </>
    );
};

export default DisplayProducts;
