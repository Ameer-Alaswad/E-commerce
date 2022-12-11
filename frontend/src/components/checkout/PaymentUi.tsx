import {
    Box,
    Button,
    FormControlLabel,
    Radio,
    RadioGroup,
    TextField,
    Typography,
} from "@mui/material";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ShoppingCartContext } from "../../contexts/shopping-cart-context/shoppingCartContext";
import ProgressSteps from "./ProgressSteps";

const PaymentUi = () => {
    const navigate = useNavigate();
    const shoppingCartContext = useContext(ShoppingCartContext);
    const {
        setProgressStep,
        userSignin,
        shippingAddresData,
        setPaymentMethod,
        paymentMethod,
    } = shoppingCartContext;

    const user: any = localStorage.getItem("userData");
    const parsedUser = JSON.parse(user);
    let userSigned = userSignin || parsedUser;

    useEffect(() => {
        setProgressStep(1);
        if (!userSigned) {
            navigate("/user/signin?redirect=/payment");
            setTimeout(() => {
                toast.error("Sign in first!");
            }, 100);
        }
        if (!shippingAddresData.address) {
            navigate("/shipping?redirect=/payment");
            setTimeout(() => {
                toast.error("Add your Address first!");
            }, 100);
        }
    }, [userSigned, navigate, setProgressStep, shippingAddresData]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log((event.target as HTMLInputElement).value);

        setPaymentMethod((event.target as HTMLInputElement).value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!paymentMethod) {
            return toast.error("Choose a Payment Method first!");
        }

        localStorage.setItem(
            "paymentMethod",
            JSON.stringify(paymentMethod)
        );
        navigate("/placeOrder");
    };

    return (
        <>
            <ProgressSteps />
            <Box
                sx={ {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    height: "100vh",
                } }
            >
                <Box
                    sx={ { width: "600px", marginTop: "170px" } }
                    component="form"
                    onSubmit={ handleSubmit }
                >
                    <Typography sx={ { textAlign: "center" } } variant="h4">
                        Payment Method
                    </Typography>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={ paymentMethod }
                        onChange={ handleChange }
                    >
                        <FormControlLabel value="paypal" control={ <Radio /> } label="paypal" />
                        <FormControlLabel value="stripe" control={ <Radio /> } label="stripe" />
                    </RadioGroup>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={ { mt: 3, mb: 2 } }
                    >
                        Continue
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default PaymentUi;
