import React from "react";
import Box from "@mui/material/Box";
import { productsType } from "../display-products/Types";
import { Button, Card, CardContent, Divider, Typography } from "@mui/material";
import RatingComponent from "../display-products/Rating";

import ProductQuantity from "../display-products/ProductQuantity";
import { handleToCart } from "./handlers";
import styles from "./styles";
import useShoppingCartContext from "../../hooks/context/useShoppingCartContext";

const {
    container,
    contentContainer,
    imageContainer,
    productQuantityContainer,
    productInfoContainer,
    ratingContainer,
    priceContainer,
    descriptionContainer,
    cardContainer,
    cardContentContainer,
    cardPriceContainer,
    cardStatusContainer,
    buttonContainer,
    addToCartButton,
    productNameStyles
} = styles;

type ProductProps = {
    data: productsType[] | undefined;
};

const Product: React.FC<ProductProps> = ({ data }) => {

    const { shoppingCartItems, setShoppingCartItems } = useShoppingCartContext()

    const { name: productName, image, numReviews, rating, price, description, countInStock } = data?.[0] || {}

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        handleToCart({ event, data, shoppingCartItems, setShoppingCartItems });
    };

    return (
        <Box style={ container }>
            { data && data?.length !== 0 && (

                <Box sx={ contentContainer }>
                    <div style={ productQuantityContainer }>
                        <img
                            style={ imageContainer }
                            src={ image }
                            alt="product-img"
                        />
                        <ProductQuantity name={ productName } />
                    </div>
                    <Box sx={ productInfoContainer }>
                        <Typography
                            sx={ productNameStyles }
                            variant="h4"
                        >
                            { productName }
                        </Typography>
                        <Divider />
                        <Box sx={ ratingContainer }>
                            <RatingComponent
                                numReviews={ numReviews }
                                rating={ rating }
                            />
                        </Box>
                        <Divider />
                        <Typography sx={ priceContainer }>
                            Price ${ price }
                        </Typography>
                        <Divider />
                        <Typography sx={ descriptionContainer }>
                            Description: { description }
                        </Typography>
                        <Divider />
                    </Box>
                    <Card
                        sx={ cardContainer }
                    >
                        <CardContent>
                            <Box sx={ cardContentContainer }>
                                <Typography sx={ cardPriceContainer }>
                                    Price: ${ price }
                                </Typography>

                                <Divider />
                                <Typography sx={ cardStatusContainer }>
                                    Status:{ " " }
                                    { countInStock === 0 ? "Not in Stock" : "In Stock" }
                                </Typography>
                                <Divider />
                            </Box>
                        </CardContent>
                        <Box
                            sx={ buttonContainer }
                        >
                            <Button
                                onClick={ handleClick }
                                sx={ addToCartButton }
                                variant="contained"
                            >
                                Add to Cart
                            </Button>
                        </Box>
                    </Card>
                </Box>
            ) }
        </Box>
    );
};

export default Product;
