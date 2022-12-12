import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ShoppingCartContext } from '../../../contexts/shopping-cart-context/shoppingCartContext'
import ProgressSteps from '../ProgressSteps'
import Items from './items'
import OrderSummary from './OrderSummary'
import Payment from './Payment'
import Shipping from './Shipping'

const PlaceOrderUi = () => {
    const navigate = useNavigate()
    const shoppingCartContext = useContext(ShoppingCartContext);
    const { setProgressStep, userSignin, paymentMethod } = shoppingCartContext;

    const user: any = localStorage.getItem('userData')
    const parsedUser = JSON.parse(user)
    let userSigned = userSignin || parsedUser

    useEffect(() => {
        setProgressStep(2)

        if (!userSigned) {
            navigate("/user/signin?redirect=/shipping")
            setTimeout(() => {
                toast.error("Sign in first !")
            }, 100);
        }
        if (!paymentMethod) {
            navigate("/payment")
            setTimeout(() => {
                toast.error("Choose payment Method 1st !")
            }, 100);
        }
    }, [userSigned, navigate, setProgressStep, paymentMethod])


    return (
        <>
            <ProgressSteps />
            <Box sx={ { display: "flex", margin: "0 auto", justifyContent: "space-between", marginTop: "60px", width: "1000px" } }>
                <Box>
                    <Typography sx={ { marginBottom: "15px" } } variant='h3'>Preview Order</Typography>
                    <Shipping />
                    <Payment />
                    <Items />
                </Box>
                <OrderSummary />
            </Box>
        </>
    )
}

export default PlaceOrderUi