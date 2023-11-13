import { Card, CardContent, Typography } from '@mui/material'
import useOrdersContext from '../../../hooks/context/useOrdersContext';
import { PAYMENT_METHOD_TITLE, PAYMENT_TEXT } from '../../constants/text';

const PaymentUi = () => {
    const { orderData } = useOrdersContext();
    const { paymentMethod, isPaid } = orderData || {}

    const paymentUiContainerStyles = {
        backgroundColor: "#ADD8E6",
        borderRadius: "10px",
        padding: "20px",
        marginBottom: "20px",
    }

    return (
        <Card sx={ paymentUiContainerStyles }>
            { orderData &&
                <CardContent>
                    <Typography
                        variant="h5"
                        sx={ { marginBottom: "10px" } }
                        fontWeight="fontWeightBold"
                    >
                        { PAYMENT_TEXT }
                    </Typography>
                    <Typography variant="body1">
                        <strong>{ PAYMENT_METHOD_TITLE }:</strong> { paymentMethod }
                    </Typography>
                    <Typography
                        sx={
                            isPaid ? { color: "green" } : { color: "red" }
                        }
                        variant="body1"
                    >
                        { isPaid ? "Paid" : "Not Paid" }
                    </Typography>
                </CardContent>

            }
        </Card>
    )
}

export default PaymentUi