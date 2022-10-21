import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../fetchers/fetch";
import { productsType } from "../display-products/displayProductsInterface";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const DisplayProduct = () => {
    const [product, setProduct] = useState<productsType[]>([]);
    const [noProductsError, SetNoProductsError] = useState<string>("");
    const [loading, setLoading] = useState<string>("");
    const params = useParams();
    const { label } = params;
    useEffect(() => {
        fetchProducts(
            setProduct,
            SetNoProductsError,
            setLoading,
            `/api/product/label/${label}`
        );
    }, [label]);

    return (
        <Box style={ { marginTop: "64px" } }>
            { loading && <Typography>{ loading }</Typography> }
            { product.length !== 0 && <Box> { product[0].name }</Box> }
            { noProductsError && (
                <Typography color="red" gutterBottom variant="h6">
                    { noProductsError }
                </Typography>
            ) }
        </Box>
    );
};


export default DisplayProduct;
