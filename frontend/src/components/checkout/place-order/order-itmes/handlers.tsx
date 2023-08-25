import { toast } from "react-toastify";
import useShoppingCartContext from "../../../../hooks/context/useShoppingCartContext";
import { CANNOT_ADD_MORE_MESSAGE, LIMIT_REACHED_MESSAGE, OUT_OF_STOCK } from "../../../constants/errorMessages";
import { ITEMS_TEXT } from "../../../constants/text";

type HandleQuantityIncrement = {
    productId: string;
    productLimit: number;
    quantity: number;
    countInStock: number;
};

export const useShoppingCartHandlers = () => {
    const { shoppingCartItems, setShoppingCartItems } = useShoppingCartContext();

    const handleProductDelete = (productName: string) => () => {
        const filterProductsInCart = shoppingCartItems.filter(

            (product) => product.productId !== productName
        );
        setShoppingCartItems(filterProductsInCart);
    };


    const handleQuantityIncrement =
        ({
            productId,
            productLimit,
            quantity,
            countInStock,
        }: HandleQuantityIncrement) =>
            () => {
                const limitPerProduct = 6
                const updatedShoppingCartItems = shoppingCartItems.map((cartItem) => {
                    const isMatchingProductId = cartItem.productId === productId;
                    const isQuantityLessThanLimit = cartItem.quantity < productLimit;
                    const isQuantityLessThanStock = cartItem.quantity < countInStock;

                    if (isMatchingProductId) {
                        if (isQuantityLessThanLimit && isQuantityLessThanStock) {
                            const incrementedQuantity = cartItem.quantity + 1;
                            return { ...cartItem, quantity: incrementedQuantity };
                        }
                    }

                    return cartItem;
                });


                if (quantity >= countInStock) {
                    toast.error(OUT_OF_STOCK);
                } else if (quantity >= limitPerProduct) {
                    toast.error(LIMIT_REACHED_MESSAGE);
                } else if (
                    JSON.stringify(updatedShoppingCartItems) ===
                    JSON.stringify(shoppingCartItems)
                ) {
                    toast.error(`${CANNOT_ADD_MORE_MESSAGE} ${productLimit} ${ITEMS_TEXT}`);
                } else {
                    setShoppingCartItems(updatedShoppingCartItems);
                }
            };

    const handleQuantityDecrement = (productId: string) => () => {
        const updatedShoppingCartItems = shoppingCartItems.map((cartItem) => {
            const isMatchingProductId = cartItem.productId === productId;
            const isQuantityGreaterThanOne = cartItem.quantity > 1;
            const newQuantity = cartItem.quantity - 1;

            if (isMatchingProductId && isQuantityGreaterThanOne) {
                return { ...cartItem, quantity: newQuantity };
            } else {
                return cartItem;
            }
        });

        setShoppingCartItems(updatedShoppingCartItems);
    };



    return {
        handleProductDelete,
        handleQuantityIncrement,
        handleQuantityDecrement,
    };
};
