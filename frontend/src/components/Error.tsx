// This Component requires some changes and styling
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

const ProductsNotFoundAlert = () => {
    const alertContainerStyles = {
        width: "100%",
        marginTop: "200px",
    };

    return (
        <Stack sx={ alertContainerStyles } spacing={ 2 }>
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                Sorry, the requested products could not be found.
            </Alert>
        </Stack>
    );
};

export default ProductsNotFoundAlert;
