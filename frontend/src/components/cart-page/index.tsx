
import cartStyles from "./CartStyles";
import CartItemsSection from "./CartItemsSection";
import CartSummarySection from "./CartSummarySection";

const {
    containerStyle,
} = cartStyles;

const CartPage = () => {
    // Variables names from context need to be changed, this will be done in a separate branch later. 
    return (
        <div id="cart-page-container" style={ containerStyle }>
            <CartItemsSection />
            <CartSummarySection />
        </div>
    );
};

export default CartPage;
