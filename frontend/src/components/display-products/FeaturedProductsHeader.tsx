import { Typography } from '@mui/material'
import { productTitleStyles } from './styles'
import { FEATURED_PRODUCTS_TEXT } from '../constants/text'

const FeaturedProductsHeader = () => {
    return (
        <Typography
            sx={ productTitleStyles }
            gutterBottom
            variant="h4"
            component="div"
        >
            { FEATURED_PRODUCTS_TEXT }
        </Typography>)
}

export default FeaturedProductsHeader