import { Typography } from '@mui/material'
import { PREVIEW_ORDER_TITLE } from '../../constants/text'

const Title = () => {
    return (
        <Typography id="order-preview-title" sx={ { marginBottom: "15px" } } variant="h3">
            { PREVIEW_ORDER_TITLE }
        </Typography>
    )
}

export default Title