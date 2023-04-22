// Hooks 
import useProducts from "../../hooks/useProducts";
// Components 
import Products from "./Products";
import Loading from "../Loading"
import Error from "../Error"
import { Box } from "@mui/material";

const DisplayProducts = () => {

    const { isError, isLoading, data } = useProducts("/api/product")

    if (isLoading) return <h1 style={ { marginTop: "200px" } }><Loading /></h1>;
    if (isError) return <Error />;

    return (

        <Products data={ data } />

    );
};

export default DisplayProducts;
