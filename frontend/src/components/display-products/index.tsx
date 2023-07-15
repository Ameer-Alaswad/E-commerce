import useProductsFetch from "../../hooks/useProductsFetch";
import ProductsList from "./ProductsList";
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
                <ProductsList data={ data } />
            ) }
        </>
    );
};

export default DisplayProducts;
