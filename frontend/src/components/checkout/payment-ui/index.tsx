// React imports
import { FormEvent } from "react";

import { Box } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import ProgressSteps from "../ProgressSteps";
import Title from "./Title";
import SubmitMethodButton from "./SubmitMethodButton";
import PaymentMethodSelector from "./PaymentMethodSelector";

import useCheckoutContext from "../../../hooks/context/useCheckoutContext";
import usePaymentValidationAndRedirect from "../../../hooks/usePaymentValidationAndRedirect";

import { paymentStyles } from "../styles";
import {
    CHOOSE_PAYMENT_METHOD_ERROR,
    PAYMENT_METHOD_TEXT,
} from "../../constants/text";
import { PLACE_ORDER } from "../../constants/path";

const { container, form } = paymentStyles;

const PaymentUi = () => {
    const navigate = useNavigate();
    const { paymentMethod } = useCheckoutContext();

    const handlePaymentMethodSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        !paymentMethod
            ? toast.error(CHOOSE_PAYMENT_METHOD_ERROR)
            : localStorage.setItem(
                PAYMENT_METHOD_TEXT,
                JSON.stringify(paymentMethod)
            );
        navigate(PLACE_ORDER);
    };

    usePaymentValidationAndRedirect();

    return (
        <>
            <ProgressSteps />
            <Box sx={ container }>
                <Box sx={ form } component="form" onSubmit={ handlePaymentMethodSubmit }>
                    <Title />
                    <PaymentMethodSelector />
                    <SubmitMethodButton />
                </Box>
            </Box>
        </>
    );
};

export default PaymentUi;
