import { useContext } from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@mui/material'

import { useNavigate } from 'react-router-dom';
import { ShoppingCartContext } from '../../../contexts/shopping-cart-context/shoppingCartContext';
import { placeOrderComponentsStyles } from '../styles';

const { container, title } = placeOrderComponentsStyles

export default function Shipping() {

    const shoppingCartContext = useContext(ShoppingCartContext);
    const { shippingAddressData } = shoppingCartContext;
    const { fullName, address } = shippingAddressData
    const navigate = useNavigate()

    const handleNavigate = () => navigate("/shipping")

    return (
        <Card sx={ container }>
            <CardContent>
                <Typography sx={ title } fontWeight="fontWeightBold">
                    Shipping
                </Typography>
                <Typography variant="body1">
                    <strong>Name:</strong> { fullName }
                </Typography>
                <Typography variant="body1">
                    <strong>Address:</strong> { address }
                </Typography>
            </CardContent >
            <CardActions>
                <Button onClick={ handleNavigate } size="small">Edit</Button>
            </CardActions>
        </Card >
    );
}