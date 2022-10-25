import Button from "@mui/material/Button";
import { useContext, useState } from "react";
import { product, ShoppingCartContext } from "../contexts/shoppingCartContext";
import { fetchProducts } from "../fetchers/fetch";
import { addToShoppingCartLogic } from "../utils/utils";
import { productsType } from "./display-products/displayProductsInterface";

type props = {
    productName: string
    cartItems: productsType[]
    setCartItems: (value: {}[]) => void
    product: product[]
}

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
