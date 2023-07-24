// React
import React from "react";
import { useNavigate } from "react-router";
// Types
import { productProps } from "./displayProductsInterface";
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

const styles = {
    title: { textAlign: "center", marginTop: "90px" },
    container: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        maxWidth: "1250px",
        margin: "0 auto",
        marginTop: "50px",
    },
    card: {
        maxWidth: 500,
        marginBottom: "60px",
        width: "400px",
    },
    cardMedia: {
        height: "390px",
        width: "100%",
        objectFit: "contain",
    },
    price: {
        marginBottom: 0,
    },
    description: {
        marginBottom: "16px",
    },
};

const Products: React.FC<productProps> = ({ data }) => {
    const navigate = useNavigate();
    const { container, card, cardMedia, price, description, title } = styles;
    return (
        <Box id="products-container">
            <Typography sx={ title } gutterBottom variant="h4" component="div">
                Featured Products
            </Typography>
            <Box sx={ container }>
                { data
                    ? data?.map((product) => {
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
                                sx={ card }
                            >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        sx={ cardMedia }
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
                                            sx={ price }
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
                                            sx={ description }
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
                    : null }
            </Box>
        </Box>
    );
};

export default Products;
