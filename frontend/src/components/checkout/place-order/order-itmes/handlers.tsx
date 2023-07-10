
import { toast } from "react-toastify";

import useAppContext from "../../../../hooks/useAppContext";

export const useShoppingCartHandlers = () => {
    const { shoppingCartItems, setShoppingCartItems } = useAppContext()

    const handleProductDelete = (productName: string) => () => {
        const filterProductsInCart = shoppingCartItems.filter(
            (product) => product.productId !== productName
        );
        setShoppingCartItems(filterProductsInCart);
    };
    type HandleQuantityIncrement = {
        productId: string;
        productLimit: number;
        quantity: number;
        countInStock: number;
    };

    const handleQuantityIncrement =
        ({
            productId,
            productLimit,
            quantity,
            countInStock,
        }: HandleQuantityIncrement) =>
            () => {
                const updatedshoppingCartItems = shoppingCartItems.map((item) =>
                    item.productId === productId
                        ? item.quantity < productLimit && item.quantity < countInStock // check if quantity is less than productLimit and countInStock
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                        : item
                );

                if (quantity >= countInStock) {
                    toast.error(`This product is out of stock`);
                } else if (quantity >= 6) {
                    toast.error(`You have reached the limit for this product`);
                } else if (
                    JSON.stringify(updatedshoppingCartItems) === JSON.stringify(shoppingCartItems)
                ) {
                    toast.error(`You cannot add more than ${productLimit} items`);
                } else {
                    setShoppingCartItems(updatedshoppingCartItems);
                }
            };

    const handleQuantityDecrement = (productId: string) => () => {
        const updatedshoppingCartItems = shoppingCartItems.map((item) =>
            item.productId === productId && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
        setShoppingCartItems(updatedshoppingCartItems);
    };

    return {
        handleProductDelete,
        handleQuantityIncrement,
        handleQuantityDecrement,
    };
};
