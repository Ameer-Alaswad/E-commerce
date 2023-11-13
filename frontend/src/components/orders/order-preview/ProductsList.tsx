import { Card, CardContent, Typography } from "@mui/material";
import useOrdersContext from "../../../hooks/context/useOrdersContext";
import { CURRENCY_DOLLAR, ITEMS_TEXT } from "../../constants/text";

const ProductsList = () => {
    const { orderData } = useOrdersContext();

    const productsListContainerStyles = {
        minWidth: 275, width: "600px", backgroundColor: "#ADD8E6",
        borderRadius: "10px",
        padding: "20px",
        marginBottom: "20px",
    }
    const productCardStyles = {
        minWidth: 275,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: "10px",
    }
    return (
        <Card sx={ productsListContainerStyles }>
            <CardContent>
                <Typography sx={ { marginBottom: "10px" } } fontWeight="fontWeightBold">
                    { ITEMS_TEXT }
                </Typography>
                { orderData?.orderItems
                    ? orderData.orderItems.map((item) => {
                        const { image, productId, quantity, price } = item;
                        return (
                            <Card
                                sx={ productCardStyles }
                            >
                                <Card>
                                    <img
                                        style={ { width: "60px", height: "80px" } }
                                        src={ image }
                                        alt="items-img"
                                    />
                                </Card>
                                <Typography>{ productId }</Typography>
                                <Typography>{ quantity }</Typography>
                                <Typography>{ price }{ CURRENCY_DOLLAR }</Typography>
                            </Card>
                        );
                    })
                    : null }
            </CardContent>
        </Card>
    );
};

export default ProductsList;
