import { Button } from '@mui/material'
import { submitMethodButtonStyles } from '../styles'
import { CONTINUE_TEXT } from '../../constants/text'

const SubmitMethodButton = () => {
    return (
        <Button type="submit" fullWidth variant="contained" sx={ submitMethodButtonStyles }>
            { CONTINUE_TEXT }
        </Button>
    )
}

export default SubmitMethodButton