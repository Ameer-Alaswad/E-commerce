// This component requires styling 

// React 
import React from 'react'
// Material UI
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import { RatingProps } from './displayProductsInterface';

const RatingComponent: React.FC<RatingProps> = (Props) => {
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