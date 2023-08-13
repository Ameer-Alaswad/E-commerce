import { MouseEvent } from "react";
import Box from "@mui/material/Box";
import { productsType } from "../display-products/Types";
import { Button, Card, CardContent, CardMedia, Divider, Typography } from "@mui/material";
import RatingComponent from "../display-products/Rating";

import ProductQuantity from "../display-products/ProductQuantity";
import { handleToCart } from "./handlers";
import {
    container,
    productContainer,
    imageContainer,
    productQuantityImageContainer,
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
    productNameStyles,
} from "./styles";
import useShoppingCartContext from "../../hooks/context/useShoppingCartContext";
import ProductImageQuantity from "./ProductImageQuantity";


type ProductProps = {
    data: productsType[];
};

const Product: React.FC<ProductProps> = ({ data }) => {
    const { shoppingCartItems, setShoppingCartItems } = useShoppingCartContext();
    const productData = data?.[0]
    const {
        name: productName,
        image,
        numReviews: totalReviews,
        rating,
        price,
        description,
        countInStock,
    } = productData || {};

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        handleToCart({ event, data, shoppingCartItems, setShoppingCartItems });
    };
    const ProductImageQuantityProps = { productName, image }
    return (
        <Box id="container" sx={ container }>
            { data?.length && (
                <Box id="productContainer" sx={ productContainer }>
                    <ProductImageQuantity { ...ProductImageQuantityProps } />
                    <Box sx={ productInfoContainer }>
                        <Typography sx={ productNameStyles } variant="h4">
                            { productName }
                        </Typography>
                        <Divider />
                        <Box sx={ ratingContainer }>
                            <RatingComponent totalReviews={ totalReviews } rating={ rating } />
                        </Box>
                        <Divider />
                        <Typography sx={ priceContainer }>Price ${ price }</Typography>
                        <Divider />
                        <Typography sx={ descriptionContainer }>
                            Description: { description }
                        </Typography>
                        <Divider />
                    </Box>
                    <Card sx={ cardContainer }>
                        <CardContent>
                            <Box sx={ cardContentContainer }>
                                <Typography sx={ cardPriceContainer }>Price: ${ price }</Typography>

                                <Divider />
                                <Typography sx={ cardStatusContainer }>
                                    Status: { countInStock === 0 ? "Not in Stock" : "In Stock" }
                                </Typography>
                                <Divider />
                            </Box>
                        </CardContent>
                        <Box sx={ buttonContainer }>
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
