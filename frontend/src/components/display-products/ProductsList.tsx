// React
import React from "react";
import { useNavigate } from "react-router";
// Types
import { productProps } from "./Types";
// Material Ui
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
// Components
import RatingComponent from "./Rating";
import AddToCartButton from "../AddToCartButton";
import ProductQuantity from "./ProductQuantity";
import {
    productDescriptionStyles,
    productCardContainerStyles,
    productContainerStyles,
    productImageStyles,
    productPriceStyles,
    productTitleStyles,
} from "./styles";

const ProductsList: React.FC<productProps> = ({ data }) => {
    const navigate = useNavigate();
    return (
        <Box id="products-container">
            <Typography
                sx={ productTitleStyles }
                gutterBottom
                variant="h4"
                component="div"
            >
                Featured Products
            </Typography>
            <Box sx={ productContainerStyles }>
                { data?.map((product) => {
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
                                    <RatingComponent
                                        numReviews={ numReviews }
                                        rating={ rating }
                                    />
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
                })
                }
            </Box>
        </Box>
    );
};

export default ProductsList;
