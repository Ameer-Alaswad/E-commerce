import React from "react";
import Box from "@mui/material/Box";
import FeaturedProductsHeader from "./FeaturedProductsHeader";
import ProductCard from "./ProductCard";
import { productContainerStyles } from "./styles";
import { productProps } from "./Types";

const ProductsList: React.FC<productProps> = ({ data }) => {

    return (
        <Box id="products-container">
            <FeaturedProductsHeader />
            <Box sx={ productContainerStyles }>
                { data?.map((product) => (
                    <ProductCard key={ product.label } product={ product } />
                )) }
            </Box>
        </Box>
    );
};

export default ProductsList;
