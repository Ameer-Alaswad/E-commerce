import { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import RatingComponent from "../../display-products/Rating";
import {
    productNameStyles,
    ratingContainer,
    pricesStyles,
    descriptionStyles,
} from "../styles";
import {
    CURRENCY_DOLLAR,
    DESCRIPTION_TEXT,
    PRICE_TEXT,
} from "../../constants/text";
import { productInfoContainerStyles } from "./styles";

type ProductDataProps = {
    productName: string;
    totalReviews: number;
    rating: number;
    price: number;
    description: string;
};



const ProductInfoCard: FC<ProductDataProps> = ({
    productName,
    totalReviews,
    rating,
    price,
    description,
}) => {
    return (
        <Box id="product-info-container" sx={ productInfoContainerStyles }>
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
        </Box>
    );
};

export default ProductInfoCard;
