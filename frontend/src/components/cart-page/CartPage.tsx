import React from 'react'
// context 
import { useContext } from "react";
import { ShoppingCartContext } from '../../contexts/shopping-cart-context/shoppingCartContext';
// Material UI 
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Divider } from '@mui/material';
import ItemsList from '../checkout/place-order/order-itmes/ItemsList';

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
        <div id="cart-page-container" style={ { marginTop: "100px", display: "flex", justifyContent: "center", height: '100vh' } }>
            { cartItems.length === 0 ? <Typography gutterBottom variant="h4" component="div">
                Your Cart is empty!
            </Typography> :

                <Card sx={ { minWidth: 275, width: "600px", marginRight: "40px" } }>
                    <Typography
                        gutterBottom variant="h4" component="div"
                    >
                        Shopping Cart
                    </Typography>
                    <CardContent>
                        <Typography sx={ { marginBottom: "10px" } } fontWeight="fontWeightBold">
                            Items
                        </Typography>
                        <ItemsList />
                    </CardContent>

                </Card>
            }
            { cartItems?.length !== 0 ?

                <Card sx={ {
                    width: "300px", height: "150px"
                } } >
                    <CardContent>
                        < Typography sx={ { marginBottom: "10px" } } variant="h5" fontWeight="fontWeightBold">
                            Total ({ cartItems.reduce((a, c) => a + c.quantity, 0) } items) : $
                            { cartItems.reduce((a, c) => a + c.price * c.quantity, 0) }
                        </ Typography>
                        <Divider />
                    </CardContent >
                    <Box sx={ {
                        display: "flex", justifyContent: "center"
                    } }>
                        <Button onClick={ handleProceedToCheckout } sx={ { width: "220px" }
                        } variant="contained">Proceed to CHeckout</Button>
                    </Box>
                </Card >
                : null }
        </div>
    )
}

export default CartPage