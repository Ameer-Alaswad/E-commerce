import { useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartContext } from '../../../../contexts/shopping-cart-context/shoppingCartContext';
import ItemsList from './ItemsList';


export default function Items() {
    const shoppingCartContext = useContext(ShoppingCartContext);
    const { cartItems } = shoppingCartContext;
    console.log(cartItems);

    const navigate = useNavigate()
    return (
        <Card sx={ { minWidth: 275, width: "600px" } }>
            <CardContent>
                <Typography sx={ { marginBottom: "10px" } } fontWeight="fontWeightBold">
                    Items
                </Typography>
                <ItemsList />
            </CardContent>
            <CardActions>
                <Button onClick={ () => navigate("/cart") } size="small">Edit</Button>
            </CardActions>
        </Card>
    );
}