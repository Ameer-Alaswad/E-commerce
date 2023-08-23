import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import {
    paymentMethodContainerStyles,
    paymentMethodTitleStyles,
} from "../styles";
import useCheckoutContext from "../../../hooks/context/useCheckoutContext";
import { EDIT_TEXT, METHOD_TEXT } from "../../constants/text";
import { PAYMENT_PATH } from "../../constants/path";

const PaymentMethod = () => {
    const { paymentMethod } = useCheckoutContext();
    const navigate = useNavigate();

    const handleToPaymentNavigate = () => navigate(PAYMENT_PATH);

    return (
        <Card sx={ paymentMethodContainerStyles }>
            <CardContent>
                <Typography
                    variant="h5"
                    sx={ paymentMethodTitleStyles }
                    fontWeight="fontWeightBold"
                >
                    { METHOD_TEXT }
                </Typography>
                <Typography variant="body1">
                    <strong>{ METHOD_TEXT } :</strong> { paymentMethod }
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={ handleToPaymentNavigate } size="small">
                    { EDIT_TEXT }
                </Button>
            </CardActions>
        </Card>
    );
};
export default PaymentMethod;
