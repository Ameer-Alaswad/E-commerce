import { MouseEvent } from "react";
import Box from "@mui/material/Box";
import { productsType } from "../display-products/Types";
import { Button, Card, CardContent, Divider, Typography } from "@mui/material";
import { handleToCart } from "./handlers";
import {
    container,
    productContainer,
    cardContainer,
    cardContentContainer,
    cardPriceContainer,
    cardStatusContainer,
    buttonContainer,
    addToCartButton,
} from "./styles";
import useShoppingCartContext from "../../hooks/context/useShoppingCartContext";
import ProductImageQuantity from "./ProductImageQuantity";
import ProductData from "./ProductData";


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
    const productDataProps = { productName, totalReviews, rating, price, description }
    return (
        <Box id="container" sx={ container }>
            { data?.length && (
                <Box id="productContainer" sx={ productContainer }>
                    <ProductImageQuantity { ...ProductImageQuantityProps } />
                    <ProductData { ...productDataProps } />
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
