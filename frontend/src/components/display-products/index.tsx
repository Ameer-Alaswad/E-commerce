import useProductsFetch from "../../hooks/useProductsFetch";
import Products from "./Products";
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
            ) : (
                <Products data={ data } />
            ) }
        </>
    );
};

export default DisplayProducts;
