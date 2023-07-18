import useProductsFetch from "../../hooks/useProductsFetch";
import DisplayProductsList from "./DisplayProductsList";
import AnimatedLoadingIcon from "../AnimatedLoadingIcon";
import ProductsNotFoundAlert from "../Error";
import { PRODUCTS_PATH } from "../constants/path";

const DisplayProducts = () => {
    const { isError, isLoading, data } = useProductsFetch(PRODUCTS_PATH);


    if (isLoading) {
        return <AnimatedLoadingIcon />;
    }

    if (isError) {
        return <ProductsNotFoundAlert />;
    }

    if (data) {
        return <DisplayProductsList data={ data } />;
    }

    return null;
};

export default DisplayProducts;