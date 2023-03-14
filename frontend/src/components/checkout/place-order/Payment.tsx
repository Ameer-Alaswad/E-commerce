import { useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartContext } from '../../../contexts/shopping-cart-context/shoppingCartContext';


export default function Payment() {
    const shoppingCartContext = useContext(ShoppingCartContext);
    const { paymentMethod } = shoppingCartContext;
    const navigate = useNavigate()
    return (
        <Card sx={ { minWidth: 275, width: "600px", marginBottom: "15px" } }>
            <CardContent>
                <Typography variant='h5' sx={ { marginBottom: "10px" } } fontWeight="fontWeightBold">
                    Payment
                </Typography>
                <Typography variant="body1">
                    <strong>Method:</strong> { paymentMethod }
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={ () => navigate("/payment") } size="small">Edit</Button>
            </CardActions>
        </Card>
    );
}