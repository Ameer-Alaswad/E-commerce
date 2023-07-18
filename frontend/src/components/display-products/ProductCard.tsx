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


const ProductCard: FC<{ product: productsType }> = ({
    product: {
        name,
        image,
        price: productPrice,
        description: productDescription,
        label,
        numReviews,
        rating,
    },
}) => {
    const navigate = useNavigate();


    return (

        <Card
            onClick={ () => navigate(`/product/label/${label}`) }
            key={ label }
            sx={ productCardContainerStyles }
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    sx={ productImageStyles }
                    image={ image }
                    alt={ `${name} product image` }
                />
                <CardContent>
                    <Typography color="primary" gutterBottom variant="h6" component="div">
                        { name }
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={ productPriceStyles }
                    >
                        { productPrice }{ CURRENCY_DOLLAR }
                    </Typography>
                    <RatingComponent numReviews={ numReviews } rating={ rating } />
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={ productDescriptionStyles }
                    >
                        { productDescription }
                    </Typography>
                    <AddToCartButton />
                    <ProductQuantity name={ name } />
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ProductCard;
