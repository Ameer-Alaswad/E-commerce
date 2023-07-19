import { FC } from "react";

import { Typography } from "@mui/material";
import useShoppingCartContext from "../../hooks/context/useShoppingCartContext";
import { Product } from "../../contexts/shopping-cart-context/Types";

import { quantityStyle } from "./styles";
import { ProductQuantityProps } from "./Types";
import { QUANTITY_TEXT } from "../constants/text";

const ProductQuantity: FC<ProductQuantityProps> = ({ productName }) => {

    const { shoppingCartItems } = useShoppingCartContext()

    return (
        <div id="product-quantity">
            { shoppingCartItems?.map((item: Product) => {
                const { productId: productNameInCart, quantity } = item
                const isMatchingProductNameInCart = productNameInCart === productName;
                return isMatchingProductNameInCart && (
                    <Typography sx={ quantityStyle } key={ productNameInCart }>
                        { QUANTITY_TEXT } : { quantity }
                    </Typography>
                );
            }) }
        </div>
    );
};

export default ProductQuantity;
