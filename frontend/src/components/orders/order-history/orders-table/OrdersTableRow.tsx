//  React Router Dom:
import { useNavigate } from "react-router-dom";
// Material-UI components:
import { Button, TableCell, TableRow } from "@mui/material";
// types 
import { tableProps } from "../OrdersTypes";
import { buttonHover } from "../../../cart-page/cartStyles";
import { DETAILS_BUTTON } from "../../../constants/text";

const OrdersTableRow: React.FC<tableProps> = ({ orderHistory }) => {
    const navigate = useNavigate();

    const ordersDetailsButtonStyles = {
        fontSize: "0.9rem",
        backgroundColor: "#FF5722",
        color: "white",
        borderRadius: "20px",
        padding: "10px 20px",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
            backgroundColor: "#0000CD",

            animation: `${buttonHover} 0.3s ease-in-out`,
        },
    }

    const tableRowStyles = {
        "&:last-child td, &:last-child th": { border: 0 }, backgroundColor: "#ADD8E6",
        borderRadius: "10px",
        padding: "20px",
        marginBottom: "20px",
    }

    return (
        <>
            { orderHistory &&
                orderHistory.map(
                    ({
                        _id: orderId,
                        createdAt: orderDate,
                        totalPrice: orderTotal,
                        isPaid,
                        paidAt: paidDate,
                        isDelivered,
                        deliveredAt: deliveredDate,
                    }) => {
                        return (
                            <TableRow
                                key={ orderId }
                                sx={ tableRowStyles }
                            >
                                <TableCell component="th" scope="row" align="left">
                                    { orderId }
                                </TableCell>
                                <TableCell align="right">
                                    { orderDate?.substring(0, 10) }
                                </TableCell>
                                <TableCell align="right">{ orderTotal }</TableCell>
                                <TableCell align="right">
                                    { isPaid ? paidDate?.substring(0, 10) : "No" }
                                </TableCell>
                                <TableCell align="right">
                                    { isDelivered ? deliveredDate?.substring(0, 10) : "No" }
                                </TableCell>
                                <TableCell align="right">
                                    <Button
                                        onClick={ () => navigate(`/order/${orderId}`) }
                                        variant="contained"
                                        sx={ ordersDetailsButtonStyles }
                                    >
                                        { DETAILS_BUTTON }
                                    </Button>
                                </TableCell>
                            </TableRow>
                        );
                    }
                ) }
        </>
    );
};

export default OrdersTableRow;
