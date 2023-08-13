import { Dispatch, MouseEvent, SetStateAction } from "react";
import { Product } from "../../contexts/shopping-cart-context/Types";
import { fetchProducts } from "../../fetchers/fetchProducts";
import { addToShoppingCartLogic } from "../../utils/utils";
import { PRODUCT_API_NAME } from "../constants/path";
import { productsType } from "../display-products/Types";

interface HandleAddToCart {
    event: MouseEvent<HTMLButtonElement>;
    data: productsType[]
    shoppingCartItems: Product[];
    setShoppingCartItems: Dispatch<SetStateAction<any[]>>;
}

export const addToCart = ({
    event,
    data,
    shoppingCartItems,
    setShoppingCartItems,
}: HandleAddToCart) => {
    event.stopPropagation();
    if (data) {
        const productName = data[0]?.name;
        if (productName) {
            fetchProducts(`${PRODUCT_API_NAME}${productName}`).then(
                (product: productsType[]) => {
                    addToShoppingCartLogic({
                        productName,
                        shoppingCartItems,
                        setShoppingCartItems,
                        product,
                    });
                }
            );
        }
    }
};
