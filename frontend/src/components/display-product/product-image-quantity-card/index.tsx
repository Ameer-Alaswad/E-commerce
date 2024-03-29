import { FC } from "react";
import Box from "@mui/material/Box";
import { CardMedia } from "@mui/material";
import ProductQuantity from "../../display-products/ProductQuantity";
import { productQuantityImageContainer } from "../styles";
import { productImageContainerStyles } from "./styles";

type ProductImageQuantityProps = {
    productName: string;
    image: string;
};

const ProductImageQuantityCard: FC<ProductImageQuantityProps> = ({
    productName,
    image,
}) => {
    return (
        <Box id="product-quantity-image-container" sx={ productQuantityImageContainer }>
            <CardMedia
                sx={ productImageContainerStyles }
                component="img"
                image={ image }
                alt="product-img"
            />
            <ProductQuantity productName={ productName } />
        </Box>
    );
};

export default ProductImageQuantityCard;
