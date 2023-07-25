import { Button } from "@mui/material"
import { submitButtonStyle } from "../styles"

const SubmitButton = () => {

    return (
        <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={ submitButtonStyle }
        >
            Sign up
        </Button>

    )
}

export default SubmitButton