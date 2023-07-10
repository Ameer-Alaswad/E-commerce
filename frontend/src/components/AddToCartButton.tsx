// fetch
import { fetchProducts } from "../fetchers/fetchProducts";
// utils
import { addToShoppingCartLogic } from "../utils/utils";
// type
import { productsType } from "./display-products/displayProductsInterface";
// Material UI
import Button from "@mui/material/Button";
import useAppContext from "../hooks/useAppContext";


const AddToCartButton = () => {
    const { cartItems, setCartItems } = useAppContext();

    const addToCartHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();

        const button = event.target as HTMLElement;
        const productName = button?.parentElement?.children[0]?.textContent;

        if (productName) {
            fetchProducts(`/api/product/name/${productName}`).then(
                (product: productsType[]) => {
                    addToShoppingCartLogic({
                        productName,
                        cartItems,
                        setCartItems,
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
            >
                Add to cart
            </Button>
        </>
    );
};

export default AddToCartButton;
