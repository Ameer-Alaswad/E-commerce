import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { ChangeEvent } from "react";
import useCheckoutContext from "../../../hooks/context/useCheckoutContext";
import {
    PAYMENT_METHOD_PAYBAL,
    PAYMENT_METHOD_STRIPE,
} from "../../constants/text";

const PaymentMethodSelector = () => {
    const { paymentMethod, setPaymentMethod } = useCheckoutContext();
    const handlePaymentMethodChange = (event: ChangeEvent<HTMLInputElement>) => {
        const paymentMethodValue = (event.target as HTMLInputElement).value;

        setPaymentMethod(paymentMethodValue);
    };
    return (
        <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={ paymentMethod }
            onChange={ handlePaymentMethodChange }
        >
            <FormControlLabel
                value={ PAYMENT_METHOD_PAYBAL }
                control={ <Radio /> }
                label={ PAYMENT_METHOD_PAYBAL }
            />
            <FormControlLabel
                value={ PAYMENT_METHOD_STRIPE }
                control={ <Radio /> }
                label={ PAYMENT_METHOD_STRIPE }
            />
        </RadioGroup>
    );
};

export default PaymentMethodSelector;
