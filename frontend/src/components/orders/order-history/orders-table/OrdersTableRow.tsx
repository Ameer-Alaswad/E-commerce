//  React Router Dom:
import { useNavigate } from "react-router-dom";
// Material-UI components:
import { Button, TableCell, TableRow } from "@mui/material";
// types 
import { tableProps } from "../OrdersTypes";

const OrdersTableRow: React.FC<tableProps> = ({ orderHistory }) => {
    const navigate = useNavigate();
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
                                sx={ { "&:last-child td, &:last-child th": { border: 0 } } }
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
                                    >
                                        Details
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
