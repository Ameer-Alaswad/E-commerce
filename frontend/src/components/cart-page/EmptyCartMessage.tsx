import { Button, Container, Typography, Paper } from "@mui/material";
import { EmptyCartContainerStyles, emptyCardPaperStyles, emptyCartButton } from "./cartStyles";
import { EMPTY_CART_TEXT, GO_SHOPPING_TEXT } from "../constants/text";

type NavigateHome = {
    navigateHome: () => void;
};

const EmptyCartMessage = ({ navigateHome }: NavigateHome) => {
    return (
        <Container
            id="empty-cart-container"
            sx={ EmptyCartContainerStyles }
        >
            <Paper
                elevation={ 3 }
                sx={ emptyCardPaperStyles }
            >
                <Typography
                    id="empty-cart-msg"
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={ { marginBottom: "1.5rem" } }
                >
                    { EMPTY_CART_TEXT }
                </Typography>
                <Button
                    onClick={ navigateHome }
                    variant="contained"
                    sx={ emptyCartButton }
                >
                    { GO_SHOPPING_TEXT }
                </Button>
            </Paper>
        </Container>
    );
};

export default EmptyCartMessage;
