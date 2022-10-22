import React from 'react'
import Box from "@mui/material/Box";
import { productsType } from '../display-products/displayProductsInterface';
interface Props {
    data: productsType[] | undefined
}
const Product: React.FC<Props> = ({ data }) => {
    return (
        <Box style={ { marginTop: "64px" } }>
            { data && data?.length !== 0 && <Box> { data[0]?.name }</Box> }
        </Box>
    )
}

export default Product