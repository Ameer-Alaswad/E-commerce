import { Button, Card, Typography } from "@mui/material";
import { useContext } from "react";
import { ShoppingCartContext } from "../../../../contexts/shopping-cart-context/shoppingCartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { useShoppingCartHandlers } from "./handlers";
import { Product } from "../../../../contexts/shopping-cart-context/shoppingCartContextTypes";
import { orderItemsListStyles } from "../../styles";
import { CURRENCY_DOLLAR } from "../../../constants";

const { cardContainer, itemImage, deleteButton } = orderItemsListStyles;

export default function ItemsList() {
    const { cartItems } = useContext(ShoppingCartContext);
    const {
        handleProductDelete,
        handleQuantityIncrement,
        handleQuantityDecrement,
    } = useShoppingCartHandlers();

    const isCartPage = window.location.pathname === "/cart"

    return (
        <>
            { cartItems?.map(
                ({
                    productId,
                    image,
                    quantity,
                    price,
                    productLimit,
                    countInStock,
                }: Product) => {

                    const disabledButtonLogic =
                        quantity === productLimit ||
                        quantity === 6 ||
                        quantity >= countInStock;

                    return (
                        <Card id="card-container" sx={ cardContainer } key={ productId }>
                            <Card id="image-container">
                                <img id="image" style={ itemImage } src={ image } alt="items-img" />
                            </Card>
                            <Typography id="product-id">{ productId }</Typography>
                            <Typography id="product-price">{ price }{ CURRENCY_DOLLAR }</Typography>
                            <Button
                                id="decrement-button"
                                onClick={ handleQuantityDecrement(productId) }
                                disabled={ quantity === 1 }
                            >
                                <RemoveIcon />
                            </Button>
                            <Typography id="product-quantity">{ quantity }</Typography>

                            <Button
                                id="increment-button"
                                onClick={ handleQuantityIncrement(
                                    {
                                        productId,
                                        productLimit,
                                        quantity,
                                        countInStock
                                    }
                                ) }
                                disabled={ disabledButtonLogic }
                            >
                                <AddIcon />
                            </Button>
                            { isCartPage && (
                                <Button
                                    id="delete-button"
                                    onClick={ handleProductDelete(productId) }
                                    variant="contained"
                                    startIcon={ <DeleteIcon /> }
                                    sx={ deleteButton }
                                >
                                    DELETE
                                </Button>
                            ) }
                        </Card>
                    );
                }
            ) }
        </>
    );
}
