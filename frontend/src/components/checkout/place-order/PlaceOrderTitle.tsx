import { Typography } from '@mui/material'
import { previewOrderTitleStyles } from '../styles'
import { PREVIEW_ORDER_TITLE } from '../../constants/text'

const PlaceOrderTitle = () => {
    return (
        <Typography sx={ previewOrderTitleStyles } variant="h3">
            { PREVIEW_ORDER_TITLE }
        </Typography>
    )
}

export default PlaceOrderTitle