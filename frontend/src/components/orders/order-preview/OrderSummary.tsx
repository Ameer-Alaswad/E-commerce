import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import useOrdersContext from "../../../hooks/context/useOrdersContext";
import {
    CURRENCY_DOLLAR,
    ITEMS_TEXT,
    ORDER_SUMMARY_TITLE,
    SHIPPING_TITLE,
    TAX_TEXT,
    TOTAL_TEXT,
} from "../../constants/text";

const OrderSummary = () => {
    const { orderData } = useOrdersContext();
    const orderSummaryContainerStyles = {
        width: "300px",
        height: "400px",
        backgroundColor: "#ADD8E6",
        borderRadius: "10px",
        padding: "20px",
        marginBottom: "20px",
    };

    const orderSummaryItemStyles = {
        paddingTop: "10px",
        paddingBottom: "10px",
    };
    const { itemsPrice, shippingPrice, taxPrice, totalPrice } = orderData || {};

    return (
        <Card sx={ orderSummaryContainerStyles }>
            <CardContent>
                <Typography
                    sx={ { marginBottom: "10px" } }
                    variant="h5"
                    fontWeight="fontWeightBold"
                >
                    { ORDER_SUMMARY_TITLE }
                </Typography>
                <Box sx={ { marginLeft: "10px" } }>
                    { itemsPrice && (
                        <Typography sx={ orderSummaryItemStyles }>
                            { ITEMS_TEXT }: { CURRENCY_DOLLAR } { itemsPrice }
                        </Typography>
                    ) }
                    <Divider />
                    { shippingPrice && (
                        <Typography sx={ orderSummaryItemStyles }>
                            { SHIPPING_TITLE }: { CURRENCY_DOLLAR } { shippingPrice }
                        </Typography>
                    ) }
                    <Divider />
                    { taxPrice && (
                        <Typography sx={ orderSummaryItemStyles }>
                            { TAX_TEXT }: { CURRENCY_DOLLAR } { taxPrice }
                        </Typography>
                    ) }
                    <Divider />
                    { totalPrice && (
                        <Typography
                            sx={ { paddingTop: "10px", paddingBottom: "10px" } }
                            fontWeight="fontWeightBold"
                        >
                            { TOTAL_TEXT }: { CURRENCY_DOLLAR } { totalPrice }
                        </Typography>
                    ) }
                </Box>
            </CardContent>
        </Card>
    );
};

export default OrderSummary;