import {
    Box,
    Button,
    FormControlLabel,
    Radio,
    RadioGroup,
    Typography,
} from "@mui/material";

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ShoppingCartContext } from "../../contexts/shopping-cart-context/shoppingCartContext";
import ProgressSteps from "./ProgressSteps";
import { paymentStyles } from "./styles";
import usePaymentRedirect from "./usePaymentRedirect";
const { container, form, heading, button } = paymentStyles;

const PaymentUi = () => {
    const navigate = useNavigate();
    const shoppingCartContext = useContext(ShoppingCartContext);
    const {
        setProgressStep,
        userSignin,
        shippingAddressData,
        setPaymentMethod,
        paymentMethod,
    } = shoppingCartContext;

    // this hook takes care of redirecting the user based on logged in or not.
    usePaymentRedirect(userSignin, setProgressStep, shippingAddressData);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPaymentMethod((event.target as HTMLInputElement).value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!paymentMethod) {
            return toast.error("Choose a Payment Method first!");
        }
        localStorage.setItem("paymentMethod", JSON.stringify(paymentMethod));
        navigate("/placeOrder");
    };

    return (
        <>
            <ProgressSteps />
            <Box sx={ container }>
                <Box sx={ form } component="form" onSubmit={ handleSubmit }>
                    <Typography sx={ heading } variant="h4">
                        Payment Method
                    </Typography>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={ paymentMethod }
                        onChange={ handleChange }
                    >
                        <FormControlLabel
                            value="paypal"
                            control={ <Radio /> }
                            label="paypal"
                        />
                        <FormControlLabel
                            value="stripe"
                            control={ <Radio /> }
                            label="stripe"
                        />
                    </RadioGroup>
                    <Button type="submit" fullWidth variant="contained" sx={ button }>
                        Continue
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default PaymentUi;
