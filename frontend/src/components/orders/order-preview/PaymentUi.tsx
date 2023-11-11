import { Card, CardContent, Typography } from '@mui/material'
import useOrdersContext from '../../../hooks/context/useOrdersContext';
import { PAYMENT_METHOD_TITLE, PAYMENT_TEXT } from '../../constants/text';

const PaymentUi = () => {
    const { orderData } = useOrdersContext();

    return (
        <Card sx={ {
            backgroundColor: "#ADD8E6",
            borderRadius: "10px",
            padding: "20px",
            marginBottom: "20px",
        } }>
            <CardContent>
                <Typography
                    variant="h5"
                    sx={ { marginBottom: "10px" } }
                    fontWeight="fontWeightBold"
                >
                    { PAYMENT_TEXT }
                </Typography>
                <Typography variant="body1">
                    <strong>{ PAYMENT_METHOD_TITLE }:</strong> { orderData?.paymentMethod }
                </Typography>
                <Typography
                    sx={
                        !orderData?.isPaid ? { color: "red" } : { color: "green" }
                    }
                    variant="body1"
                >
                    { orderData?.isPaid ? "Paid" : "Not Paid" }
                </Typography>
            </CardContent>
        </Card>
    )
}

export default PaymentUi