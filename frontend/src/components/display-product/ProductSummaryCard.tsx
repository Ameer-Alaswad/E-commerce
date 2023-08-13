import { FC, MouseEvent } from "react";
import Box from "@mui/material/Box";
import { Card, CardContent, Divider, Typography } from "@mui/material";
import {
    productSummaryCardContainerStyles,
    productSummaryCardContentContainerStyles,
    productSummaryCardPriceStyles,
    productSummaryCardStatusStyles,
    addToCartButtonContainerStyles,
    addToCartButtonStyles,
} from "./styles";
import Button from "@mui/material/Button";
import {
    ADD_TO_CART_TEXT,
    CURRENCY_DOLLAR,
    IN_STOCK_TEXT,
    NOT_IN_STOCK_TEXT,
    PRICE_TEXT,
    STATUS,
} from "../constants/text";

type ProductSummaryCardProps = {
    price: number;
    countInStock: number;
    handleAddToCart: (event: MouseEvent<HTMLButtonElement>) => void;
};

const ProductSummaryCard: FC<ProductSummaryCardProps> = ({
    price,
    countInStock,
    handleAddToCart,
}) => {
    return (
        <Card id="product-summary-card-container" sx={ productSummaryCardContainerStyles }>
            <CardContent>
                <Box id="product-summary-card-content-container" sx={ productSummaryCardContentContainerStyles }>
                    <Typography sx={ productSummaryCardPriceStyles }>
                        { PRICE_TEXT }: { CURRENCY_DOLLAR }
                        { price }
                    </Typography>
                    <Divider />
                    <Typography sx={ productSummaryCardStatusStyles }>
                        { STATUS }: { countInStock ? IN_STOCK_TEXT : NOT_IN_STOCK_TEXT }
                    </Typography>
                    <Divider />
                </Box>
            </CardContent>
            <Box sx={ addToCartButtonContainerStyles }>
                <Button
                    onClick={ handleAddToCart }
                    sx={ addToCartButtonStyles }
                    variant="contained"
                >
                    { ADD_TO_CART_TEXT }
                </Button>
            </Box>
        </Card>
    );
};

export default ProductSummaryCard;
