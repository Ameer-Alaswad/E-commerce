import { FC, MouseEvent } from "react";
import Box from "@mui/material/Box";
import { productsType } from "../display-products/Types";
import {
    productContainer,
    productCardsContainer,

} from "./styles";
import useShoppingCartContext from "../../hooks/context/useShoppingCartContext";
import ProductSummaryCard from "./product-summary-card";
import { addToCart } from "./handlers";
import ProductImageQuantityCard from "./product-image-quantity-card";
import ProductInfoCard from "./product-info-card";


type ProductProps = {
    data: productsType[];
};

const Product: FC<ProductProps> = ({ data }) => {
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

    // Handles adding the selected product to the shopping cart 
    const handleAddToCart = (event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        addToCart({ event, data, shoppingCartItems, setShoppingCartItems });
    };

    const isProductData = data?.length > 0

    const ProductImageQuantityProps = { productName, image }
    const productDataProps = { productName, totalReviews, rating, price, description }
    const ProductSummaryCardProps = { price, countInStock, handleAddToCart }

    return (
        <Box id="product-container" sx={ productContainer }>
            { isProductData && (
                <Box id="product-cards-container" sx={ productCardsContainer }>
                    <ProductImageQuantityCard { ...ProductImageQuantityProps } />
                    <ProductInfoCard { ...productDataProps } />
                    <ProductSummaryCard { ...ProductSummaryCardProps } />
                </Box>
            ) }
        </Box>
    );
};

export default Product;
