import React from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useProducts from "../../fetchers/useProducts";

const DisplayProduct = () => {
    const params = useParams();
    const { label } = params;
    const { isError, isLoading, data } = useProducts(`/api/product/label/${label}`)
    if (isLoading) return <h1 style={ { marginTop: "200px" } }>Loading</h1>;
    if (isError) return <h1>Something went wrong </h1>;

    return (
        <Box style={ { marginTop: "64px" } }>
            { data && data?.length !== 0 && <Box> { data[0]?.name }</Box> }
        </Box>
    );
};


export default DisplayProduct;
