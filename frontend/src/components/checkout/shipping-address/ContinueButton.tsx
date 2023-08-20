import { Button } from '@mui/material'
import { formButton } from '../styles'

const ContinueButton = () => {
    return (

        <Button type="submit" fullWidth variant="contained" sx={ formButton }>
            Continue
        </Button>

    )
}

export default ContinueButton