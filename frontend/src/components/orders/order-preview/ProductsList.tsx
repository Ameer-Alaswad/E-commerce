import { Card, CardContent, Typography } from "@mui/material";
import useOrdersContext from "../../../hooks/context/useOrdersContext";
import { ITEMS_TEXT } from "../../constants/text";

const ProductsList = () => {
    const { orderData } = useOrdersContext();

    return (
        <Card sx={ { minWidth: 275, width: "600px" } }>
            <CardContent>

                <Typography sx={ { marginBottom: "10px" } } fontWeight="fontWeightBold">
                    { ITEMS_TEXT }
                </Typography>

                { orderData?.orderItems
                    ? orderData.orderItems.map((item) => {
                        const { image, productId, quantity, price } = item;
                        return (
                            <Card
                                sx={ {
                                    minWidth: 275,
                                    display: "flex",
                                    justifyContent: "space-around",
                                    alignItems: "center",
                                    marginBottom: "10px",
                                } }
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
                                <Typography>{ price }$</Typography>
                            </Card>
                        );
                    })
                    : null }
            </CardContent>
        </Card>
    );
};

export default ProductsList;
