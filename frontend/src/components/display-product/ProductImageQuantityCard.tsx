import React from "react";
import Box from "@mui/material/Box";
import { CardMedia } from "@mui/material";
import ProductQuantity from "../display-products/ProductQuantity";
import { productQuantityImageContainer, imageContainer } from "./styles";

type ProductImageQuantityProps = {
    productName: string;
    image: string;
};

const ProductImageQuantityCard: React.FC<ProductImageQuantityProps> = ({
    productName,
    image,
}) => {
    return (
        <Box sx={ productQuantityImageContainer }>
            <CardMedia
                sx={ imageContainer }
                component="img"
                image={ image }
                alt="product-img"
            />
            <ProductQuantity productName={ productName } />
        </Box>
    );
};

export default ProductImageQuantityCard;
