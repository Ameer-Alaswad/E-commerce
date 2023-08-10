import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProductsFetch";

import Product from "./Product";
import Error from "../Error"
import AnimatedLoadingIcon from "../AnimatedLoadingIcon";

const DisplayProduct = () => {

    const params = useParams();
    const { label } = params;
    const { isError, isLoading, data } = useProducts(`/api/product/label/${label}`)


    return (
        <>
            { isError && <Error /> }
            { isLoading && <AnimatedLoadingIcon /> }
            { data && <Product data={ data } /> }
        </>
    );
};


export default DisplayProduct;
