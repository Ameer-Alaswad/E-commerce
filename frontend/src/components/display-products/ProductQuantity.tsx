import { FC } from "react";

import { Typography } from "@mui/material";
import useShoppingCartContext from "../../hooks/context/useShoppingCartContext";
import { Product } from "../../contexts/shopping-cart-context/Types";

import { quantityStyle } from "./styles";
import { ProductQuantityProps } from "./Types";
import { QUANTITY_TEXT } from "../constants/text";

const ProductQuantity: FC<ProductQuantityProps> = ({ name }) => {

    const { shoppingCartItems } = useShoppingCartContext()

    return (
        <div id="product-quantity">
            { shoppingCartItems?.map((item: Product) => {
                const { productId, quantity } = item
                const isMatchingProductId = productId === name;
                return isMatchingProductId && (
                    <Typography sx={ quantityStyle } key={ productId }>
                        { QUANTITY_TEXT } : { quantity }
                    </Typography>
                );
            }) }
        </div>
    );
};

export default ProductQuantity;
