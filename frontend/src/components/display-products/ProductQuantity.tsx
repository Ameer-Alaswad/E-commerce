import React from "react";

import { Typography } from "@mui/material";
import useShoppingCartContext from "../../hooks/context/useShoppingCartContext";
import { Product } from "../../contexts/shopping-cart-context/Types";

interface ProductQuantityProps {
    name: string | undefined;
}

const ProductQuantity: React.FC<ProductQuantityProps> = ({ name }) => {
    const { shoppingCartItems } = useShoppingCartContext()

    const quantityStyle = {
        marginTop: "7px",
        fontWeight: "bold",
    };

    return (
        <div id="quantity">
            { shoppingCartItems.map((item: Product) => {
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
