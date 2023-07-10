import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { placeOrderComponentsStyles } from '../styles';
import useAppContext from '../../../hooks/useAppContext';

const { container, title } = placeOrderComponentsStyles

const PaymentMethod = () => {

    const { paymentMethod } = useAppContext()
    const navigate = useNavigate()

    const handleNavigate = () => navigate("/payment")

    return (
        <Card sx={ container }>
            <CardContent>
                <Typography variant='h5' sx={ title } fontWeight="fontWeightBold">
                    Payment
                </Typography>
                <Typography variant="body1">
                    <strong>Method:</strong> { paymentMethod }
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={ handleNavigate } size="small">Edit</Button>
            </CardActions>
        </Card>
    );
}
export default PaymentMethod