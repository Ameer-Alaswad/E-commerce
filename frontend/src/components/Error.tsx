// This Component requires some changes and styling
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import { ERROR_TITLE, PRODUCTS_NOT_FOUND_MESSAGE } from "./constants/text";

const ProductsNotFoundAlert = () => {

    const alertContainerStyles = {
        width: "100%",
        marginTop: "200px",
    };

    return (
        <Stack sx={ alertContainerStyles } spacing={ 2 }>
            <Alert severity="error">
                <AlertTitle>{ ERROR_TITLE }</AlertTitle>
                { PRODUCTS_NOT_FOUND_MESSAGE }
            </Alert>
        </Stack>
    );
};

export default ProductsNotFoundAlert;
