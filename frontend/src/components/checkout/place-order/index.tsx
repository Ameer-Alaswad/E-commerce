import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ProgressSteps from "../ProgressSteps";
import Items from "./order-itmes";
import OrderSummary from "./OrderSummary";
import PaymentMethod from "./PaymentMethod";
import Shipping from "./Shipping";
import useRedirect from "../useRedirect";
import { getPaymentRedirectProps } from "../utils";
import { placeOrderStyles } from "../styles";
import useAppContext from "../../../hooks/useAppContext";
import useUserAuthContext from "../../../hooks/useUserAuthContext";

const { mainContainer, orderDetailsContainer, PreviewOrder } = placeOrderStyles;

const PlaceOrderUi = () => {


    const { setProgressStep, paymentMethod } = useAppContext()
    const { userSignedIn } = useUserAuthContext()

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
            userSignedIn,
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
