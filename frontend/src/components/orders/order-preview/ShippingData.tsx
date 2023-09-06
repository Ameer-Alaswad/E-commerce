import { Card, CardContent, Typography } from "@mui/material";
import useOrdersContext from "../../../hooks/context/useOrdersContext";
import {
    ADDRESS_TEXT,
    NAME_TEXT,
    SHIPPING_TITLE,
    DELIVERED_TEXT,
    NOT_DELIVERED_TEXT,
} from "../../constants/text";

const ShippingData = () => {
    const { orderData } = useOrdersContext();

    return (
        <>
            { orderData?.shippingAddress && (
                <Card sx={ { minWidth: 275, width: "600px", marginBottom: "15px" } }>
                    <CardContent>
                        <Typography
                            sx={ { marginBottom: "10px" } }
                            fontWeight="fontWeightBold"
                        >
                            { SHIPPING_TITLE }
                        </Typography>
                        <Typography variant="body1">
                            <strong>{ NAME_TEXT }:</strong>{ " " }
                            { orderData?.shippingAddress?.fullName }
                        </Typography>
                        <Typography variant="body1">
                            <strong>{ ADDRESS_TEXT }:</strong>{ " " }
                            { orderData?.shippingAddress?.address }
                        </Typography>
                        <Typography
                            sx={
                                !orderData.isDelivered ? { color: "red" } : { color: "green" }
                            }
                            variant="body1"
                        >
                            { orderData.isDelivered ? DELIVERED_TEXT : NOT_DELIVERED_TEXT }
                        </Typography>
                    </CardContent>
                </Card>
            ) }
        </>
    );
};

export default ShippingData;
