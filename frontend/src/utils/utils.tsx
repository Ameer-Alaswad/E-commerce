// Types
import { productsType } from "../components/display-products/displayProductsInterface";
import {
    product,
    userSignin,
} from "../contexts/shopping-cart-context/shoppingCartContextTypes";

export type AddToShoppingCartTypes = {
    productName: string;
    cartItems: product[];
    setCartItems: (value: product[]) => void;
    product: productsType[];
};

export const addToShoppingCartLogic = ({
    productName,
    cartItems,
    setCartItems,
    product,
}: AddToShoppingCartTypes) => {
    const productIsNotInShoppingCart = cartItems.every(
        (item) => productName !== item.productId
    );
    if (productIsNotInShoppingCart) {
        return setCartItems([
            ...cartItems,
            { productId: String(productName), quantity: 1, productLimit: 6 },
        ]);
    }
    const handleProductQuantityLimitations = cartItems.forEach((item) => {

        const reachedProductLimitForUser =
            item?.productId === productName && item?.productLimit <= 1;
        if (reachedProductLimitForUser) {
            console.log("reached limit");

            return alert("product per purchase limit");
        }
        const productInStock =
            item?.productId === productName &&
            product[0]?.countInStock >= item?.quantity;
        if (!productInStock) {
            console.log("not in stock");

            return alert("error")
        }
        if (productInStock) {
            console.log("in stock");

            const changeProductQuantity = cartItems.filter((item) => {
                if (item?.productId === productName) {
                    item.quantity += 1;
                    item.productLimit -= 1;
                    return item;
                }
                return item;
            });
            console.log(changeProductQuantity);

            return setCartItems([...changeProductQuantity]);
        }

        //  here the logic starts

    });
    return handleProductQuantityLimitations;
};

export const checkUserLoggedIn = (userSignin: userSignin | null) => {
    const user: any = localStorage.getItem("userData");
    const parsedUser = JSON.parse(user);
    let userSigned = userSignin;
    !userSignin ? (userSigned = parsedUser) : (userSigned = userSignin);
    return userSigned;
};
