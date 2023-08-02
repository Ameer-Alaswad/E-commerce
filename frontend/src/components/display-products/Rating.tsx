import { FC } from "react";
import { Stack, Rating, Box } from "@mui/material";
import { RatingProps } from "./Types";
import { ratingContainerStyles } from "./styles";
import { TOTAL_REVIEWS } from "../constants/text";

const RatingComponent: FC<RatingProps> = ({ totalReviews, rating }) => {

    return (
        <Stack
            sx={ ratingContainerStyles }
            spacing={ 1 }
        >
            <Rating
                size="small"
                name="half-rating-read"
                value={ rating }
                precision={ 0.5 }
                readOnly
            />
            <Box component="span">{ totalReviews } { TOTAL_REVIEWS }</Box>
        </Stack>
    );
};

export default RatingComponent;
