import { Box } from "@mui/system";
import ProgressSteps from "../ProgressSteps";
import Items from "./order-itmes";
import OrderSummary from "./OrderSummary";
import PaymentMethod from "./PaymentMethod";
import { placeOrderStyles } from "../styles";
import PlaceOrderTitle from "./PlaceOrderTitle";
import ShippingInfo from "./ShippingInfo";
import usePlaceOrderValidationAndRedirect from "../../../hooks/usePlaceOrderValidationAndRedirect";

const { mainContainer, orderDetailsContainer } = placeOrderStyles;

const PlaceOrderUi = () => {

    usePlaceOrderValidationAndRedirect()
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
