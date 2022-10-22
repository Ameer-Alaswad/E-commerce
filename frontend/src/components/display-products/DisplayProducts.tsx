import useProducts from "../../fetchers/useProducts";
import Products from "./Products";

const DisplayProducts = () => {

    const { isError, isLoading, data } = useProducts("/api/products")

    if (isLoading) return <h1 style={ { marginTop: "200px" } }>Loading</h1>;
    if (isError) return <h1>Something went wrong </h1>;

    return (
        <>
            <Products data={ data } />
        </>
    );
};

export default DisplayProducts;
