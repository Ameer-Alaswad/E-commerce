import { useContext } from "react";
import { toast } from "react-toastify";
import { ShoppingCartContext } from "../../../../contexts/shopping-cart-context/shoppingCartContext";

export const useShoppingCartHandlers = () => {
    const { cartItems, setCartItems } = useContext(ShoppingCartContext);

    const handleProductDelete = (productName: string) => () => {
        const filterProductsInCart = cartItems.filter(
            (product) => product.productId !== productName
        );
        setCartItems(filterProductsInCart);
    };

    const handleQuantityIncrement =
        (
            productId: string,
            productLimit: number,
            quantity: number,
            countInStock: number,
        ) =>
            () => {
                const updatedCartItems = cartItems.map((item) =>

                    item.productId === productId
                        ? item.quantity < productLimit && item.quantity < countInStock // check if quantity is less than productLimit and countInStock
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                        : item
                );
                console.log(quantity);
                console.log(countInStock);

                if (quantity >= countInStock) {
                    toast.error(`This product is out of stock`);

                } else if (quantity >= 6) {
                    toast.error(`You have reached the limit for this product`);
                } else if (
                    JSON.stringify(updatedCartItems) === JSON.stringify(cartItems)
                ) {
                    toast.error(`You cannot add more than ${productLimit} items`);
                } else {
                    setCartItems(updatedCartItems);
                }
            };

    const handleQuantityDecrement = (productId: string) => () => {
        const updatedCartItems = cartItems.map((item) =>
            item.productId === productId && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
        setCartItems(updatedCartItems);
    };

    return {
        handleProductDelete,
        handleQuantityIncrement,
        handleQuantityDecrement,
    };
};
