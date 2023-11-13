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
    const { isDelivered, shippingAddress } = orderData || {}

    const shippingDataContainer = {
        backgroundColor: "#ADD8E6",
        borderRadius: "10px",
        padding: "20px",
        marginBottom: "20px",
    }

    return (
        <>
            { orderData?.shippingAddress && (
                <Card sx={ shippingDataContainer }>
                    <CardContent>
                        <Typography
                            sx={ { marginBottom: "10px" } }
                            fontWeight="fontWeightBold"
                        >
                            { SHIPPING_TITLE }
                        </Typography>
                        <Typography variant="body1">
                            <strong>{ NAME_TEXT }:</strong>{ " " }
                            { shippingAddress?.fullName }
                        </Typography>
                        <Typography variant="body1">
                            <strong>{ ADDRESS_TEXT }:</strong>{ " " }
                            { shippingAddress?.address }
                        </Typography>
                        <Typography
                            sx={
                                !isDelivered ? { color: "red" } : { color: "green" }
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
