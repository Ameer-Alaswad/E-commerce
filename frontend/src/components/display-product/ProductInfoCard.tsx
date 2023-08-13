import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import RatingComponent from "../display-products/Rating";
import {
    productDataContainer,
    productNameStyles,
    ratingContainer,
    pricesStyles,
    descriptionStyles,
} from "./styles";
import {
    CURRENCY_DOLLAR,
    DESCRIPTION_TEXT,
    PRICE_TEXT,
} from "../constants/text";

type ProductDataProps = {
    productName: string;
    totalReviews: number;
    rating: number;
    price: number;
    description: string;
};

const ProductInfoCard: React.FC<ProductDataProps> = ({
    productName,
    totalReviews,
    rating,
    price,
    description,
}) => {
    return (
        <Box sx={ productDataContainer }>
            <Typography sx={ productNameStyles } variant="h4">
                { productName }
            </Typography>
            <Divider />
            <Box sx={ ratingContainer }>
                <RatingComponent totalReviews={ totalReviews } rating={ rating } />
            </Box>
            <Divider />
            <Typography sx={ pricesStyles }>
                { PRICE_TEXT }: { CURRENCY_DOLLAR }
                { price }
            </Typography>
            <Divider />
            <Typography sx={ descriptionStyles }>
                { DESCRIPTION_TEXT }: { description }
            </Typography>
            <Divider />
        </Box>
    );
};

export default ProductInfoCard;
