import React from 'react'
import { useContext } from "react";
import { ShoppingCartContext } from '../../contexts/shoppingCartContext';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

const CartPage = () => {
    const shoppingCartContext = useContext(ShoppingCartContext)
    const { cartItems } = shoppingCartContext;
    console.log(cartItems);

    return (
        <Box style={ { marginTop: "66px" } }>
            <Typography
                gutterBottom variant="h4" component="div"
            >
                Shopping Cart
            </Typography>
            { cartItems.length === 0 ? <Typography gutterBottom variant="h4" component="div">
                Your Cart is empty!
            </Typography> :
                cartItems.map((item) => {
                    return <Box>
                        <Typography
                            gutterBottom variant="h4" component="span"
                        >
                            { item?.productId }{ " " }
                        </Typography>
                        <Typography
                            gutterBottom variant="h4" component="span"
                        >
                            Quantity{ item?.quantity }
                        </Typography>
                    </Box>
                })
            }
        </Box>
    )
}

export default CartPage