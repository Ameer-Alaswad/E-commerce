import { Button, Typography, Paper, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { useShoppingCartHandlers } from "./handlers";
import {
    deleteItemButton,
    itemImageStyles,
    itemsContainer,
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
        <Box sx={ itemsContainer } id="items-container">
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
                        const isQuantityGreaterThanStock = quantity >= countInStock;
                        const isDecrementButtonDisabled =
                            quantity === minimumProductQuantity;
                        const isIncrementButtonDisabled =
                            isQuantityEqualToLimit || isQuantityGreaterThanStock;

                        return (
                            <Paper
                                elevation={ 3 }
                                sx={ itemsContainerStyles }
                                key={ productId }
                            >
                                <div id="image-container">
                                    <img
                                        id="image"
                                        style={ itemImageStyles }
                                        src={ image }
                                        alt="items-img"
                                    />
                                </div>
                                <Typography id="product-id">{ productId }</Typography>
                                <Typography sx={ { color: "#0000CD" } } id="product-price">
                                    { price }
                                    { CURRENCY_DOLLAR }
                                </Typography>
                                <Button
                                    sx={ { color: "#0000CD" } }
                                    id="decrement-button"
                                    onClick={ handleQuantityDecrement(productId) }
                                    disabled={ isDecrementButtonDisabled }
                                >
                                    <RemoveIcon />
                                </Button>
                                <Typography id="product-quantity">{ quantity }</Typography>
                                <Button
                                    sx={ { color: "#0000CD" } }
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
                            </Paper>
                        );
                    }
                ) }
        </Box >
    );
}
