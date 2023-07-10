// This component requires refactoring
import { Button, Card, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { useShoppingCartHandlers } from "./handlers";
import { Product } from "../../../../contexts/app-context/AppContextTypes";
import { orderItemsListStyles } from "../../styles";
import { CURRENCY_DOLLAR } from "../../../constants/text";
import useCustomLocation from "../../../../hooks/useCustomLocation";
import useAppContext from "../../../../hooks/useAppContext";

const { cardContainer, itemImage, deleteButton } = orderItemsListStyles;

export default function ItemsList() {
    const { cartItems } = useAppContext()
    const {
        handleProductDelete,
        handleQuantityIncrement,
        handleQuantityDecrement,
    } = useShoppingCartHandlers();

    const { isCartPage } = useCustomLocation()

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
                    const isQuantityEqualToLimit = quantity === productLimit;
                    // countInStock is what's left of that specific product in the store.
                    const isQuantityGreaterThanStock = quantity >= countInStock;
                    const isDecrementButtonDisabled = quantity === 1;
                    const isIncrementButtonDisabled =
                        isQuantityEqualToLimit || isQuantityGreaterThanStock;

                    return (
                        <Card id="card-container" sx={ cardContainer } key={ productId }>
                            <Card id="image-container">
                                <img
                                    id="image"
                                    style={ itemImage }
                                    src={ image }
                                    alt="items-img"
                                />
                            </Card>
                            <Typography id="product-id">{ productId }</Typography>
                            <Typography id="product-price">{ price }{ CURRENCY_DOLLAR }</Typography>
                            <Button
                                id="decrement-button"
                                onClick={ handleQuantityDecrement(productId) }
                                disabled={ isDecrementButtonDisabled }
                            >
                                <RemoveIcon />
                            </Button>
                            <Typography id="product-quantity">{ quantity }</Typography>

                            <Button
                                id="increment-button"
                                onClick={ handleQuantityIncrement({
                                    productId,
                                    productLimit,
                                    quantity,
                                    countInStock,
                                }) }
                                disabled={ isIncrementButtonDisabled }
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
