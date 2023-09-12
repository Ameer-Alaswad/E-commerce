import { Box } from "@mui/system";
import ProgressSteps from "../ProgressSteps";
import Items from "./order-itmes";
import OrderSummary from "./OrderSummary";
import PaymentMethod from "./PaymentMethod";
import { ordersDetailsContainer, placeOrderContainerStyles } from "../styles";
import PlaceOrderTitle from "./PlaceOrderTitle";
import ShippingInfo from "./ShippingInfo";
import usePlaceOrderValidationAndRedirect from "../../../hooks/usePlaceOrderValidationAndRedirect";
import GoBackButton from "../../GoBackButton";
import { PAYMENT_PATH } from "../../constants/path";


const PlaceOrderUi = () => {

    usePlaceOrderValidationAndRedirect()

    return (
        <div style={ placeOrderContainerStyles }>
            <ProgressSteps />
            <GoBackButton goBackLink={ PAYMENT_PATH } />
            <Box sx={ ordersDetailsContainer }>
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
