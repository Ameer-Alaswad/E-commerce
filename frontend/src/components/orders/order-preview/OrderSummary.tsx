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

    return (
        <Card
            sx={ {
                width: "300px",
                height: "400px",
                backgroundColor: "#ADD8E6",
                borderRadius: "10px",
                padding: "20px",
                marginBottom: "20px",
            } }
        >
            <CardContent>
                <Typography
                    sx={ { marginBottom: "10px" } }
                    variant="h5"
                    fontWeight="fontWeightBold"
                >
                    { " " }
                    { ORDER_SUMMARY_TITLE }
                </Typography>
                <Box sx={ { marginLeft: "10px" } }>
                    <Typography sx={ { paddingTop: "10px", paddingBottom: "10px" } }>
                        { ITEMS_TEXT }: { CURRENCY_DOLLAR }
                        { orderData?.itemsPrice }
                    </Typography>
                    <Divider />
                    <Typography sx={ { paddingTop: "10px", paddingBottom: "10px" } }>
                        { SHIPPING_TITLE }: { CURRENCY_DOLLAR }
                        { orderData?.shippingPrice }
                    </Typography>
                    <Divider />
                    <Typography sx={ { paddingTop: "10px", paddingBottom: "10px" } }>
                        { TAX_TEXT }: { CURRENCY_DOLLAR }
                        { orderData?.taxPrice }
                    </Typography>
                    <Divider />
                    <Typography
                        sx={ { paddingTop: "10px", paddingBottom: "10px" } }
                        fontWeight="fontWeightBold"
                    >
                        { TOTAL_TEXT }: { CURRENCY_DOLLAR }
                        { orderData?.totalPrice }
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default OrderSummary;
