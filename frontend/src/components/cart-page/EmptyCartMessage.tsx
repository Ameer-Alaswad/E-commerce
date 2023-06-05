import { Button, Container, Typography } from "@mui/material";
import cartStyles from "./CartStyles";

const { emptyCartContainer } = cartStyles;
type NavigateHome = {
    navigateHome: () => void
}
const EmptyCartMessage = ({ navigateHome }: NavigateHome) => {

    return (
        <Container id="empty-cart-container" sx={ emptyCartContainer }>
            <Typography id="empty-cart-msg" gutterBottom variant="h4" component="div">
                Your Cart is empty!
            </Typography>
            <Button onClick={ navigateHome } variant="contained">
                Go Shopping!
            </Button>
        </Container>
    );
};

export default EmptyCartMessage;
