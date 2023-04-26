// Types
import { productsType } from "../components/display-products/displayProductsInterface";
import {
    product,
    userSignin,
} from "../contexts/shopping-cart-context/shoppingCartContextTypes";
import { toast } from "react-toastify";

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
            {
                productId: String(productName),
                quantity: 1,
                productLimit: 6,
                image: product[0]?.image,
                price: product[0]?.price,
                product: product[0]._id,
            },

        ]);
    }
    const handleProductQuantityLimitations = cartItems.forEach((item) => {
        const reachedProductLimitForUser =
            item?.productId === productName && item?.productLimit <= 1;
        if (reachedProductLimitForUser) {
            return toast.error("product per purchase limit");
        }
        const productInStock =
            item?.productId === productName &&
            product[0]?.countInStock >= item?.quantity;
        if (productInStock) {

            const changeProductQuantity = cartItems.filter((item) => {
                if (item?.productId === productName) {
                    item.quantity += 1;
                    item.productLimit -= 1;
                    return item;
                }
                return item;
            });
            return setCartItems([...changeProductQuantity]);
        }
        if (
            item?.productId === productName &&
            product[0]?.countInStock <= item?.quantity
        ) {
            return toast.error("error");
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


export const captureRedirectionRoute = (search: string) => {
    const redirectInUrl = new URLSearchParams(search).get('redirect')
    const redirect = redirectInUrl ? redirectInUrl : '/'
    return redirect
}