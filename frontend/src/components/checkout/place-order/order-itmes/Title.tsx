import { Typography } from '@mui/material'
import { orderItemsTitleStyles } from '../../styles'
import { ITEMS_TEXT } from '../../../constants/text'

const Title = () => {
    return (
        <Typography sx={ orderItemsTitleStyles } fontWeight="fontWeightBold">
            { ITEMS_TEXT }
        </Typography>
    )
}

export default Title