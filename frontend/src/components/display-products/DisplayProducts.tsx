import useProducts from "../../fetchers/useProducts";
import Products from "./Products";
import Loading from "../Loading"
import Error from "../Error"
const DisplayProducts = () => {

    const { isError, isLoading, data } = useProducts("/api/products")

    if (isLoading) return <h1 style={ { marginTop: "200px" } }><Loading /></h1>;
    if (isError) return <Error />;

    return (
        <>
            <Products data={ data } />
        </>
    );
};

export default DisplayProducts;
