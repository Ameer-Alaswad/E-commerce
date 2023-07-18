import { Typography } from '@mui/material'
import { productTitleStyles } from './styles'

const FeaturedProductsHeader = () => {
    return (
        <Typography
            sx={ productTitleStyles }
            gutterBottom
            variant="h4"
            component="div"
        >
            Featured Products
        </Typography>)
}

export default FeaturedProductsHeader