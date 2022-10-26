// react router 
import { useParams } from "react-router-dom";
// hooks 
import useProducts from "../../hooks/useProducts";
// components 
import Product from "./Product";
import Loading from "../Loading"
import Error from "../Error"

const DisplayProduct = () => {

    const params = useParams();
    const { label } = params;
    const { isError, isLoading, data } = useProducts(`/api/product/label/${label}`)

    if (isError) return <Error />;
    if (isLoading) return <div style={ { marginTop: "200px" } }><Loading /></div>

    return (
        <>
            <Product data={ data } />
        </>
    );
};


export default DisplayProduct;
