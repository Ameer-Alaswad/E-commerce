import { useParams } from "react-router-dom";

import Product from "./Product";
import Error from "../Error";
import AnimatedLoadingIcon from "../AnimatedLoadingIcon";
import { PRODUCT_API_LABEL_URL } from "../constants/path";
import useProductsFetch from "../../hooks/useProductsFetch";

const DisplayProduct = () => {
    const params = useParams();
    const { label: productLabel } = params;
    const { isError, isLoading, data } = useProductsFetch(
        `${PRODUCT_API_LABEL_URL}${productLabel}`
    );

    return (
        <>
            { isError && <Error /> }
            { isLoading && <AnimatedLoadingIcon /> }
            { data && <Product data={ data } /> }
        </>
    );
};

export default DisplayProduct;
