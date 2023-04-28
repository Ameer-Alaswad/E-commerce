import { Button, Card, Tooltip, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../../../contexts/shopping-cart-context/shoppingCartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "react-toastify/dist/ReactToastify.css";
import { useShoppingCartHandlers } from "./handlers";
import { product } from "../../../../contexts/shopping-cart-context/shoppingCartContextTypes";

const styles = {
    cardContainer: {
        minWidth: 350,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: "10px",
    },
    itemImage: {
        width: "60px",
        height: "80px",
    },
    deleteButton: {
        fontSize: "0.7rem",
        padding: "10px 10px",
    },
    tooltip: {
        fontSize: "0.8rem",
    },
};

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
                    <Card sx={ styles.cardContainer } key={ productId }>
                        <Card>
                            <img style={ styles.itemImage } src={ image } alt="items-img" />
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
                                sx={ styles.deleteButton }
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
