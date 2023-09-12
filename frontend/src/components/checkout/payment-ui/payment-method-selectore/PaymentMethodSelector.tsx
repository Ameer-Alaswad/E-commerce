import { ChangeEvent } from "react";

import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

import useCheckoutContext from "../../../../hooks/context/useCheckoutContext";
import {
    PAYMENT_METHOD_PAYBAL,
    PAYMENT_METHOD_STRIPE,
} from "../../../constants/text";
import { radioButtonStyles, radioButtonTextStyles } from "./styles";

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
                control={
                    <Radio
                        sx={ radioButtonStyles }
                    />
                }
                label={ <span
                    style={ {
                        color: "#0000CD",
                    } }
                >
                    { PAYMENT_METHOD_PAYBAL }
                </span> }
            />
            <FormControlLabel
                value={ PAYMENT_METHOD_STRIPE }
                control={
                    <Radio
                        sx={ radioButtonStyles }
                    />
                }

                label={
                    <span
                        style={ radioButtonTextStyles }
                    >
                        { PAYMENT_METHOD_STRIPE }
                    </span>
                }
            />
        </RadioGroup>
    );
};

export default PaymentMethodSelector;
