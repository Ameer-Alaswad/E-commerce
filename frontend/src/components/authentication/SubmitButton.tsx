import { Button } from "@mui/material"
import { SIGNIN_TEXT, SIGNUP_TEXT } from "../constants/text"
import { submitButtonStyles } from "./styles"
import { SIGNIN_PATH } from "../constants/path";
import useCustomLocation from "../../hooks/useCustomLocation";

const SubmitButton = () => {
    const { location } = useCustomLocation();

    const buttonText = location.pathname === SIGNIN_PATH ? SIGNIN_TEXT : SIGNUP_TEXT;

    return (
        <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={ submitButtonStyles }
        >
            { buttonText }
        </Button>

    )
}

export default SubmitButton