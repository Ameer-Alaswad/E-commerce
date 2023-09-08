import { cartContainerStyle } from "./cartStyles";
import CartItemsSection from "./CartItemsSection";
import CartSummarySection from "./CartSummarySection";
import { Box } from "@mui/material";

const CartPage = () => {
    // Variables names from context need to be changed, this will be done in a separate branch later.
    return (
        <Box id="cart-page-container" sx={ cartContainerStyle }>
            <CartItemsSection />
            <CartSummarySection />
        </Box>
    );
};

export default CartPage;
