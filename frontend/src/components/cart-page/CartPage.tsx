import React from 'react'
// context 
import { useContext } from "react";
import { ShoppingCartContext } from '../../contexts/shopping-cart-context/shoppingCartContext';
// Material UI 
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
    const navigate = useNavigate()
    const shoppingCartContext = useContext(ShoppingCartContext)
    const { cartItems, userSignin } = shoppingCartContext;

    const user: any = localStorage.getItem('userData')
    const parsedUser = JSON.parse(user)
    let userSigned = userSignin
    !userSignin ? userSigned = parsedUser : userSigned = userSignin
    const handleProceedToCheckout = () => {
        if (userSigned) {
            navigate('/shipping')
        }
        else {
            navigate('/user/signin?redirect=/shipping')
        }
    }
    return (
        <Box style={ { marginTop: "66px", height: "100vh" } }>
            <Typography
                gutterBottom variant="h4" component="div"
            >
                Shopping Cart
            </Typography>
            { cartItems.length === 0 ? <Typography gutterBottom variant="h4" component="div">
                Your Cart is empty!
            </Typography> :
                cartItems.map((item) => {
                    return <Box key={ item.productId }>
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
            <Button onClick={ handleProceedToCheckout }>Proceed to checkout</Button>
        </Box>
    )
}

export default CartPage