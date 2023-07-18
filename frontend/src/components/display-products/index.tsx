import useProductsFetch from "../../hooks/useProductsFetch";
import DisplayProductsList from "./DisplayProductsList";
import AnimatedLoadingIcon from "../AnimatedLoadingIcon";
import ProductsNotFoundAlert from "../Error";

const DisplayProducts = () => {

    const { isError, isLoading, data } = useProductsFetch("/api/product");

    return (
        <>
            { isLoading ? (
                <AnimatedLoadingIcon />
            ) : isError ? (
                <ProductsNotFoundAlert />
            ) : data ? (
                <DisplayProductsList data={ data } />
            ) : null }
        </>
    );
};

export default DisplayProducts;
