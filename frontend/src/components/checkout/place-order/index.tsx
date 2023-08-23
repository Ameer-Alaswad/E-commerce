import { Box } from "@mui/system";
import ProgressSteps from "../ProgressSteps";
import Items from "./order-itmes";
import OrderSummary from "./OrderSummary";
import PaymentMethod from "./PaymentMethod";
// import { getPaymentRedirectProps } from "../utils";
import { placeOrderStyles } from "../styles";
import useUserAuthContext from "../../../hooks/context/useUserAuthContext";
import useCheckoutContext from "../../../hooks/context/useCheckoutContext";
import PlaceOrderTitle from "./PlaceOrderTitle";
import ShippingInfo from "./ShippingInfo";

const { mainContainer, orderDetailsContainer } = placeOrderStyles;

const PlaceOrderUi = () => {


    const { setProgressStep, paymentMethod } = useCheckoutContext()
    const { userSignedIn } = useUserAuthContext()

    // const {
    //     progressStep,
    //     userNotSignedLink,
    //     userNotSignedMessage,
    //     redirectLink,
    //     redirectMessage,
    // } = getPaymentRedirectProps({
    //     progressStepNumber: 2,
    //     pageName: "shipping",
    //     errorMessage: "Choose a payment Method first !",
    //     stepName: "payment",
    //     redirectName: "shipping",
    // });

    // useRedirect(
    //     {
    //         userSignedIn,
    //         setProgressStep,
    //         progressStep,
    //         userNotSignedLink,
    //         userNotSignedMessage,
    //         redirectLink,
    //         redirectMessage,
    //     },
    //     paymentMethod
    // );

    return (
        <div style={ mainContainer }>
            <ProgressSteps />
            <Box sx={ orderDetailsContainer }>
                <Box>
                    <PlaceOrderTitle />
                    <ShippingInfo />
                    <PaymentMethod />
                    <Items />
                </Box>
                <OrderSummary />
            </Box>
        </div>
    );
};

export default PlaceOrderUi;
