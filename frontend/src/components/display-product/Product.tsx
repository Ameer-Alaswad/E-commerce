import { MouseEvent } from "react";
import Box from "@mui/material/Box";
import { productsType } from "../display-products/Types";
import { handleToCart } from "./handlers";
import {
    container,
    productContainer,

} from "./styles";
import useShoppingCartContext from "../../hooks/context/useShoppingCartContext";
import ProductImageQuantity from "./ProductImageQuantity";
import ProductData from "./ProductData";
import ProductSummaryCard from "./ProductSummaryCard";


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

    const handleAddToCart = (event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        handleToCart({ event, data, shoppingCartItems, setShoppingCartItems });
    };
    const isProductData = data?.length
    const ProductImageQuantityProps = { productName, image }
    const productDataProps = { productName, totalReviews, rating, price, description }
    const ProductSummaryCardProps = { price, countInStock, handleAddToCart }

    return (
        <Box id="container" sx={ container }>
            { isProductData && (
                <Box id="productContainer" sx={ productContainer }>
                    <ProductImageQuantity { ...ProductImageQuantityProps } />
                    <ProductData { ...productDataProps } />
                    <ProductSummaryCard { ...ProductSummaryCardProps } />
                </Box>
            ) }
        </Box>
    );
};

export default Product;
