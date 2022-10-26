// Context 
import { useContext } from "react";
import { ShoppingCartContext } from "../contexts/shopping-cart-context/shoppingCartContext";
// fetch 
import { fetchProducts } from "../fetchers/fetch";
// utils 
import { addToShoppingCartLogic } from "../utils/utils";
// type 
import { productsType } from "./display-products/displayProductsInterface";
// Material UI 
import Button from "@mui/material/Button";

const AddToCartButton = () => {
    const shoppingCartContext = useContext(ShoppingCartContext);
    const { cartItems, setCartItems } = shoppingCartContext;

    const addToCartHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();

        const button = event.target as HTMLElement
        const productName = button?.parentElement?.children[0]?.textContent

        if (productName) {
            fetchProducts(`/api/product/name/${productName}`).then((product: productsType[]) => {
                addToShoppingCartLogic({ productName, cartItems, setCartItems, product })
            })
        }
    };
    return (
        <>
            <Button
                onClick={ addToCartHandler }
                style={ { marginTop: "10px" } }
                variant="contained"
            >
                Add to cart
            </Button>
        </>
    );
};

export default AddToCartButton;
