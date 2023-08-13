import { MouseEvent } from "react";
import Box from "@mui/material/Box";
import { productsType } from "../display-products/Types";
import {
    container,
    productContainer,

} from "./styles";
import useShoppingCartContext from "../../hooks/context/useShoppingCartContext";
import ProductSummaryCard from "./ProductSummaryCard";
import ProductImageQuantityCard from "./ProductImageQuantityCard";
import ProductInfoCard from "./ProductInfoCard";
import { addToCart } from "./handlers";


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
        <Box id="container" sx={ container }>
            { isProductData && (
                <Box id="productContainer" sx={ productContainer }>
                    <ProductImageQuantityCard { ...ProductImageQuantityProps } />
                    <ProductInfoCard { ...productDataProps } />
                    <ProductSummaryCard { ...ProductSummaryCardProps } />
                </Box>
            ) }
        </Box>
    );
};

export default Product;
