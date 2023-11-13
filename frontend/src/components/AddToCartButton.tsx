import { fetchProducts } from "../fetchers/fetchProducts";

import { addToShoppingCartLogic } from "../utils/utils";

import { productsType } from "./display-products/Types";

import Button from "@mui/material/Button";
import useShoppingCartContext from "../hooks/context/useShoppingCartContext";
import { buttonHover } from "./cart-page/cartStyles";
import { ADD_TO_CART_TEXT } from "./constants/text";
import { PRODUCT_API_NAME } from "./constants/path";


const AddToCartButton = () => {
    const { shoppingCartItems, setShoppingCartItems } = useShoppingCartContext();

    const addToCartButtonStyles = {
        fontSize: "0.9rem",
        backgroundColor: "#FF5722",
        color: "white",
        borderRadius: "10px",
        padding: "10px 20px",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
            backgroundColor: "#0000CD",

            animation: `${buttonHover} 0.3s ease-in-out`,
        },
    }
    const addToCartHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();

        const button = event.target as HTMLElement;
        const productName = button?.parentElement?.children[0]?.textContent;

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
    };
    return (
        <>
            <Button
                onClick={ addToCartHandler }
                style={ { marginTop: "10px" } }
                variant="contained"
                sx={ addToCartButtonStyles }
            >
                { ADD_TO_CART_TEXT }
            </Button>
        </>
    );
};

export default AddToCartButton;
