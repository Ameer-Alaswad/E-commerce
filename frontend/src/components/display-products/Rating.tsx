import React from 'react'
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
interface Props {
    numReviews: number
    rating: number
}
const RatingComponent: React.FC<Props> = (Props) => {
    const { numReviews, rating } = Props
    return (
        <Stack style={ { display: "flex", justifyContent: "space-between", flexDirection: "row", alignItems: "center" } } spacing={ 1 }>
            <Rating size="small" name="half-rating-read" value={ rating } precision={ 0.5 } readOnly /><Box component="span" >
                { numReviews } Reviews
            </Box>
        </Stack>
    )
}

export default RatingComponent