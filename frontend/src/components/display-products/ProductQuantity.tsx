import React, { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/shopping-cart-context/shoppingCartContext";
import { Typography } from "@mui/material";
import { product } from "../../contexts/shopping-cart-context/shoppingCartContextTypes";

interface ProductQuantityProps {
    name: string | undefined;
}

const ProductQuantity: React.FC<ProductQuantityProps> = ({ name }) => {
    const { cartItems } = useContext(ShoppingCartContext);

    const quantityStyle = {
        marginTop: "7px",
        fontWeight: "bold",
    };

    return (
        <div id="quantity">
            { cartItems.map((item: product) => {
                const { productId, quantity } = item || {};
                if (item?.productId === name) {
                    return (
                        <Typography sx={ quantityStyle } key={ productId }>
                            { quantity } of this product in cart
                        </Typography>
                    );
                }
                return null;
            }) }
        </div>
    );
};

export default ProductQuantity;
