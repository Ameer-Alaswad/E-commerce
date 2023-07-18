import React from "react";
import { useNavigate } from "react-router";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
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


interface ProductCardProps {
    product: productsType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const navigate = useNavigate();
    const {
        name,
        image,
        price: productPrice,
        description: productDescription,
        label,
        numReviews,
        rating,
    } = product;

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
                    alt="green iguana"
                />
                <CardContent>
                    <Typography
                        color="blue"
                        gutterBottom
                        variant="h6"
                        component="div"
                    >
                        { name }
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={ productPriceStyles }
                    >
                        { productPrice }$
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
