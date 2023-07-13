// fetch
import { fetchProducts } from "../fetchers/fetchProducts";
// utils
import { addToShoppingCartLogic } from "../utils/utils";
// type
import { productsType } from "./display-products/displayProductsInterface";
// Material UI
import Button from "@mui/material/Button";
import useShoppingCartContext from "../hooks/context/useShoppingCartContext";


const AddToCartButton = () => {
    const { shoppingCartItems, setShoppingCartItems } = useShoppingCartContext();

    const addToCartHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();

        const button = event.target as HTMLElement;
        const productName = button?.parentElement?.children[0]?.textContent;

        if (productName) {
            fetchProducts(`/api/product/name/${productName}`).then(
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
            >
                Add to cart
            </Button>
        </>
    );
};

export default AddToCartButton;
