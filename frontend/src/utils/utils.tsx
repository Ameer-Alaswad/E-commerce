// This requires refactoring 
// Types
import { productsType } from "../components/display-products/displayProductsInterface";
import { Product } from "../contexts/shopping-cart-context/Types";
import {
    userSignedIn,
} from "../contexts/user-auth-context/Types";
import { toast } from "react-toastify";

export type AddToShoppingCartTypes = {
    productName: string;
    shoppingCartItems: Product[];
    setShoppingCartItems: (value: Product[]) => void;
    product: productsType[];
};

export const addToShoppingCartLogic = ({
    productName,
    shoppingCartItems,
    setShoppingCartItems,
    product,
}: AddToShoppingCartTypes) => {
    console.log({ product });

    const productIsNotInShoppingCart = shoppingCartItems.every(
        (item) => productName !== item.productId
    );
    if (productIsNotInShoppingCart) {


        return setShoppingCartItems([
            ...shoppingCartItems,
            {
                productId: String(productName),
                quantity: 1,
                productLimit: 6,
                image: product[0]?.image,
                price: product[0]?.price,
                product: product[0]._id,
                countInStock: product[0].countInStock
            },

        ]);
    }
    const handleProductQuantityLimitations = shoppingCartItems.forEach((item) => {
        const reachedProductLimitForUser =
            item?.productId === productName && item?.productLimit <= 1;
        if (reachedProductLimitForUser) {
            return toast.error("product per purchase limit");
        }

        const productInStock =
            item?.productId === productName && product[0]?.countInStock >= item?.quantity;
        if (productInStock) {
            const changeProductQuantity = shoppingCartItems.filter((item) => {

                if (item?.productId === productName) {
                    if (item?.quantity >= product[0]?.countInStock) {
                        return toast.error(`This product is out of stock`);
                    }
                    if (item.quantity < 6) { // Check if the user has added more than 6 items
                        item.quantity += 1;
                        return item;
                    } else {
                        return toast.error("You cannot add more than 6 items"); // Show an error message if the user has exceeded the limit of 6 items
                    }
                }
                return item;
            });
            return setShoppingCartItems([...changeProductQuantity]);
        }

        if (
            item?.productId === productName &&
            product[0]?.countInStock <= item?.quantity
        ) {
            return toast.error("You cannot add more than 6 items of this product");
        }
    });

    // Check if the product is in stock

    return handleProductQuantityLimitations;
};

export const checkUserLoggedIn = (userSignedIn: userSignedIn | null) => {
    const user: any = localStorage.getItem("userData");
    const parsedUser = JSON.parse(user);
    let userSigned = userSignedIn;
    !userSignedIn ? (userSigned = parsedUser) : (userSigned = userSignedIn);
    return userSigned;
};


export const captureRedirectionRoute = (search: string) => {
    const redirectInUrl = new URLSearchParams(search).get('redirect')
    const redirect = redirectInUrl ? redirectInUrl : '/'
    return redirect
}

export const parseLocalStorage = (key: string, defaultValue: any): any => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : defaultValue;
};
