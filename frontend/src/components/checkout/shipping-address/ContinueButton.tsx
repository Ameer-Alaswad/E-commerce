import { Button } from '@mui/material'
import { formButton } from '../styles'
import { CONTINUE_TEXT } from '../../constants/text'

const ContinueButton = () => {
    return (

        <Button type="submit" fullWidth variant="contained" sx={ formButton }>
            { CONTINUE_TEXT }
        </Button>

    )
}

export default ContinueButton