import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { shippingInfoContainerStyles, shippingInfoTitleStyles } from "../styles";
import { SHIPPING_PATH } from "../../constants/path";
import { ADDRESS_TEXT, EDIT_TEXT, NAME_TEXT, SHIPPING_TITLE } from "../../constants/text";

import useCheckoutContext from "../../../hooks/context/useCheckoutContext";

const ShippingInfo = () => {

    const { shippingAddressData } = useCheckoutContext();
    const { fullName, address } = shippingAddressData;
    const navigate = useNavigate();
    const handleNavigateToShipping = () => navigate(SHIPPING_PATH);

    return (
        <Card sx={ shippingInfoContainerStyles }>
            <CardContent>
                <Typography variant='h5' sx={ shippingInfoTitleStyles } fontWeight="fontWeightBold">
                    { SHIPPING_TITLE }
                </Typography>
                <Typography variant="body1">
                    <strong>{ NAME_TEXT } :</strong> { fullName }
                </Typography>
                <Typography variant="body1">
                    <strong>{ ADDRESS_TEXT } :</strong> { address }
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={ handleNavigateToShipping } size="small">
                    { EDIT_TEXT }
                </Button>
            </CardActions>
        </Card>
    );
}
export default ShippingInfo