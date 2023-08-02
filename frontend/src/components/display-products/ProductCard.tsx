import { FC } from "react";
import { useNavigate } from "react-router";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActionArea,
} from "@mui/material";

import RatingComponent from "./Rating";
import AddToCartButton from "../AddToCartButton";
import ProductQuantity from "./ProductQuantity";
import {
    productCardContainerStyles,
    productImageStyles,
    productPriceStyles,
    productDescriptionStyles,
} from "./styles";

import { productsType } from "./Types";
import { CURRENCY_DOLLAR } from "../constants/text";
import { PRODUCT_LABEL_URL } from "../constants/path";


const ProductCard: FC<{ product: productsType }> = ({
    product: {
        name: productName,
        image,
        price: productPrice,
        description: productDescription,
        label,
        numReviews: totalReviews,
        rating,
    },
}) => {
    const navigate = useNavigate();
    const reviewProps = {
        totalReviews,
        rating,
    };

    return (
        <Card
            onClick={ () => navigate(`${PRODUCT_LABEL_URL}${label}`) }
            key={ label }
            sx={ productCardContainerStyles }
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    sx={ productImageStyles }
                    image={ image }
                    alt={ `${productName} product image` }
                />
                <CardContent>
                    <Typography color="primary" gutterBottom variant="h6" component="div">
                        { productName }
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={ productPriceStyles }
                    >
                        { productPrice }{ CURRENCY_DOLLAR }
                    </Typography>
                    <RatingComponent { ...reviewProps } />
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={ productDescriptionStyles }
                    >
                        { productDescription }
                    </Typography>
                    <AddToCartButton />
                    <ProductQuantity productName={ productName } />
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ProductCard;
