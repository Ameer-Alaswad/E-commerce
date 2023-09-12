// React imports
import { FormEvent } from "react";

import { Box } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import Title from "./Title";
import SubmitMethodButton from "./SubmitMethodButton";
import PaymentMethodSelector from "./payment-method-selectore/PaymentMethodSelector";

import useCheckoutContext from "../../../hooks/context/useCheckoutContext";
import usePaymentValidationAndRedirect from "../../../hooks/usePaymentValidationAndRedirect";

import { paymentUiContainerStyles, paymentUiFormStyles } from "../styles";
import {
    CHOOSE_PAYMENT_METHOD_ERROR,
    PAYMENT_METHOD_TEXT,
} from "../../constants/text";
import { PLACE_ORDER, SHIPPING_PATH } from "../../constants/path";
import GoBackButton from "../../GoBackButton";
import ProgressSteps from "../ProgressSteps";

const PaymentUi = () => {
    const navigate = useNavigate();
    const { paymentMethod } = useCheckoutContext();

    const setPaymentMethodInLocalStorage = () => {
        localStorage.setItem(
            PAYMENT_METHOD_TEXT,
            JSON.stringify(paymentMethod)
        );
    };

    const handlePaymentMethodSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        !paymentMethod
            ? toast.error(CHOOSE_PAYMENT_METHOD_ERROR)
            : setPaymentMethodInLocalStorage()
        navigate(PLACE_ORDER);
    };

    usePaymentValidationAndRedirect();

    return (
        <>
            <ProgressSteps />
            <GoBackButton goBackLink={ SHIPPING_PATH } />
            <Box sx={ paymentUiContainerStyles }>
                <Box
                    sx={ paymentUiFormStyles }
                    component="form"
                    onSubmit={ handlePaymentMethodSubmit }
                >
                    <Title />
                    <PaymentMethodSelector />
                    <SubmitMethodButton />
                </Box>
            </Box>
        </>
    );
};

export default PaymentUi;
