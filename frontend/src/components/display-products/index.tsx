import useProducts from "../../hooks/useProducts";
import Products from "./Products";
import Error from "../Error";
import AnimatedLoadingIcon from "../AnimatedLoadingIcon";

const DisplayProducts = () => {
    const { isError, isLoading, data } = useProducts("/api/product");

    return (
        <>
            { isLoading ? (
                <AnimatedLoadingIcon />
            ) : isError ? (
                <Error />
            ) : (
                <Products data={ data } />
            ) }
        </>
    );
};

export default DisplayProducts;
