import { Box, Button, CardContent, Divider, Typography } from "@mui/material";
import { useContext } from "react";
import { ShoppingCartContext } from "../../../contexts/shopping-cart-context/shoppingCartContext";
import Card from '@mui/material/Card';
import { postUser } from "../../../fetchers/postOrder";
import { useNavigate } from "react-router-dom";

export default function OrderSummary() {
    const navigate = useNavigate()
    const shoppingCartContext = useContext(ShoppingCartContext);
    const { cartItems, shippingAddressData, paymentMethod, userSignin, setCartItems } = shoppingCartContext;

    const convertToTwoDecimal = (num: number) => Math.round(num * 100 + Number.EPSILON) / 100
    const totalItemsPrice = convertToTwoDecimal(cartItems.reduce((a, c) => a + c.quantity * c.price, 0))
    const shippingPrice = totalItemsPrice > 100 ? convertToTwoDecimal(0) : convertToTwoDecimal(10)
    const taxes = convertToTwoDecimal(0.15 * totalItemsPrice)
    const totalPrice = totalItemsPrice + shippingPrice + taxes

    const user: any = localStorage.getItem('userData')
    const parsedUser = JSON.parse(user)
    let userSigned = userSignin
    !userSignin ? userSigned = parsedUser : userSigned = userSignin

    const orderData = {
        orderItems: cartItems,
        shippingAddress: shippingAddressData,
        paymentMethod: paymentMethod,
        totalItemsPrice,
        shippingPrice,
        taxes,
        totalPrice
    }
    const handleOrder = () => {
        postUser("/api/orders", orderData, navigate, userSigned?.token, setCartItems)
    }

    return (
        <Card sx={ {
            width: "300px", height: "300px"
        } } >
            <CardContent>
                < Typography sx={ { marginBottom: "10px" } } variant="h5" fontWeight="fontWeightBold"> Order Summary</ Typography>
                <Box sx={ { marginLeft: "10px" } }>
                    <Typography sx={ { paddingTop: "10px", paddingBottom: "10px" } }>Items: ${ totalItemsPrice }</Typography>
                    <Divider />
                    <Typography sx={ { paddingTop: "10px", paddingBottom: "10px" } }>Shipping: ${ shippingPrice }</Typography>
                    <Divider />
                    <Typography sx={ { paddingTop: "10px", paddingBottom: "10px" } }>Tax: ${ taxes }</Typography>
                    <Divider />
                    <Typography sx={ { paddingTop: "10px", paddingBottom: "10px" } } fontWeight="fontWeightBold">Total: ${ totalPrice }</Typography>
                    <Divider />
                </Box>
            </CardContent >
            <Box sx={ {
                display: "flex", justifyContent: "center"
            } }>
                <Button onClick={ handleOrder } sx={ { width: "220px" }
                } variant="contained">Place Order</Button>
            </Box>
        </Card >

    )

}
