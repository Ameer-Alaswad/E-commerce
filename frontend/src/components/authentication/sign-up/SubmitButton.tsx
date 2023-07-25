import { Button } from "@mui/material"
import { submitButtonStyle } from "../styles"
import { SIGNUP_TEXT } from "../../constants/text"

const SubmitButton = () => {

    return (
        <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={ submitButtonStyle }
        >
            { SIGNUP_TEXT }
        </Button>

    )
}

export default SubmitButton