import { useContext } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartContext } from '../../../contexts/shopping-cart-context/shoppingCartContext';


export default function Shipping() {
    const shoppingCartContext = useContext(ShoppingCartContext);
    const { shippingAddressData } = shoppingCartContext;
    const navigate = useNavigate()
    return (
        <Card sx={ { minWidth: 275, width: "600px", marginBottom: "15px" } }>
            <CardContent>
                <Typography sx={ { marginBottom: "10px" } } fontWeight="fontWeightBold">
                    Shipping
                </Typography>
                <Typography variant="body1">
                    <strong>Name:</strong> { shippingAddressData?.fullName }
                </Typography>
                <Typography variant="body1">
                    <strong>Address:</strong> { shippingAddressData?.address }
                </Typography>
            </CardContent >
            <CardActions>
                <Button onClick={ () => navigate("/shipping") } size="small">Edit</Button>
            </CardActions>
        </Card >
    );
}