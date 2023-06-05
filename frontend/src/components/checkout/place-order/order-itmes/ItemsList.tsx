import { Button, Card, Typography } from "@mui/material";
import { useContext } from "react";
import { ShoppingCartContext } from "../../../../contexts/shopping-cart-context/shoppingCartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { useShoppingCartHandlers } from "./handlers";
import { product } from "../../../../contexts/shopping-cart-context/shoppingCartContextTypes";
import { orderItemsListStyles } from "../../styles";

const { cardContainer, itemImage, deleteButton } = orderItemsListStyles

export default function ItemsList() {

    const { cartItems } = useContext(ShoppingCartContext);
    const {
        handleProductDelete,
        handleQuantityIncrement,
        handleQuantityDecrement,
    } = useShoppingCartHandlers();

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
                }: product) => (
                    <Card sx={ cardContainer } key={ productId }>
                        <Card>
                            <img style={ itemImage } src={ image } alt="items-img" />
                        </Card>
                        <Typography>{ productId }</Typography>
                        <Typography>{ price }$</Typography>
                        <Button
                            onClick={ handleQuantityDecrement(productId) }
                            disabled={ quantity === 1 }
                        >
                            <RemoveIcon />
                        </Button>
                        <Typography>{ quantity }</Typography>

                        <Button
                            onClick={ handleQuantityIncrement(
                                productId,
                                productLimit,
                                quantity,
                                countInStock,
                            ) }
                            disabled={ quantity === productLimit || quantity === 6 || quantity >= countInStock }
                        >
                            <AddIcon />
                        </Button>
                        { window.location.pathname === "/cart" && (
                            <Button
                                onClick={ handleProductDelete(productId) }
                                variant="contained"
                                startIcon={ <DeleteIcon /> }
                                sx={ deleteButton }
                            >
                                DELETE
                            </Button>
                        ) }
                    </Card>
                )
            ) }
        </>
    );
}
