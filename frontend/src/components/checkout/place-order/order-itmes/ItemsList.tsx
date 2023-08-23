import { Button, Card, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { useShoppingCartHandlers } from "./handlers";
import {
    deleteItemButton,
    itemImageStyles,
    itemsContainerStyles,
} from "../../styles";
import { CURRENCY_DOLLAR } from "../../../constants/text";
import useShoppingCartContext from "../../../../hooks/context/useShoppingCartContext";
import { Product } from "../../../../contexts/shopping-cart-context/Types";

export default function ItemsList() {
    const { shoppingCartItems } = useShoppingCartContext();
    const {
        handleProductDelete,
        handleQuantityIncrement,
        handleQuantityDecrement,
    } = useShoppingCartHandlers();

    return (
        <>
            { shoppingCartItems &&
                shoppingCartItems?.map(
                    ({
                        productId,
                        image,
                        quantity,
                        price,
                        productLimit,
                        countInStock,
                    }: Product) => {
                        const isQuantityEqualToLimit = quantity === productLimit;
                        const minimumProductQuantity = 1;
                        // countInStock is what's left of that specific product in the store.
                        const isQuantityGreaterThanStock = quantity >= countInStock;
                        const isDecrementButtonDisabled =
                            quantity === minimumProductQuantity;
                        const isIncrementButtonDisabled =
                            isQuantityEqualToLimit || isQuantityGreaterThanStock;

                        return (
                            <Card
                                id="card-container"
                                sx={ itemsContainerStyles }
                                key={ productId }
                            >
                                <Card id="image-container">
                                    <img
                                        id="image"
                                        style={ itemImageStyles }
                                        src={ image }
                                        alt="items-img"
                                    />
                                </Card>
                                <Typography id="product-id">{ productId }</Typography>
                                <Typography id="product-price">
                                    { price }
                                    { CURRENCY_DOLLAR }
                                </Typography>
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
                                <Button
                                    id="delete-button"
                                    onClick={ handleProductDelete(productId) }
                                    variant="contained"
                                    startIcon={ <DeleteIcon /> }
                                    sx={ deleteItemButton }
                                >
                                    DELETE
                                </Button>
                            </Card>
                        );
                    }
                ) }
        </>
    );
}
