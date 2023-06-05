import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { ShoppingCartContext } from "../../../contexts/shopping-cart-context/shoppingCartContext";
import ProgressSteps from "../ProgressSteps";
import Items from "./order-itmes";
import OrderSummary from "./OrderSummary";
import PaymentMethod from "./PaymentMethod";
import Shipping from "./Shipping";
import useRedirect from "../useRedirect";
import { getPaymentRedirectProps } from "../utils";
import { placeOrderStyles } from "../styles";

const { mainContainer, orderDetailsContainer, PreviewOrder } = placeOrderStyles;

const PlaceOrderUi = () => {

    const shoppingCartContext = useContext(ShoppingCartContext);
    const { setProgressStep, userSignin, paymentMethod } = shoppingCartContext;

    const {
        progressStep,
        userNotSignedLink,
        userNotSignedMessage,
        redirectLink,
        redirectMessage,
    } = getPaymentRedirectProps({
        progressStepNumber: 2,
        pageName: "shipping",
        errorMessage: "Choose a payment Method first !",
        stepName: "payment",
        redirectName: "shipping",
    });

    useRedirect(
        {
            userSignin,
            setProgressStep,
            progressStep,
            userNotSignedLink,
            userNotSignedMessage,
            redirectLink,
            redirectMessage,
        },
        paymentMethod
    );

    return (
        <div style={ mainContainer }>
            <ProgressSteps />
            <Box sx={ orderDetailsContainer }>
                <Box>
                    <Typography sx={ PreviewOrder } variant="h3">
                        Preview Order
                    </Typography>
                    <Shipping />
                    <PaymentMethod />
                    <Items />
                </Box>
                <OrderSummary />
            </Box>
        </div>
    );
};

export default PlaceOrderUi;
