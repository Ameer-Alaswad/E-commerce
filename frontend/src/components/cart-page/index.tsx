import { cartContainerStyle } from "./cartStyles";
import CartItemsSection from "./CartItemsSection";
import CartSummarySection from "./CartSummarySection";
import { Box } from "@mui/material";

const CartPage = () => {

    return (
        <Box id="cart-page-container" sx={ cartContainerStyle }>
            <CartItemsSection />
            <CartSummarySection />
        </Box>
    );
};

export default CartPage;
