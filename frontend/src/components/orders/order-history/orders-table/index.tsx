// Material-UI components:
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography
} from "@mui/material";
import { Box } from "@mui/system";
// Custom module:
import { tableProps } from "../OrdersTypes";
import OrdersTableRow from "./OrdersTableRow";

const TableHeaderData = [
    { label: "ID", align: "left" },
    { label: "DATE", align: "right" },
    { label: "TOTAL", align: "right" },
    { label: "PAID", align: "right" },
    { label: "DELIVERED", align: "right" },
    { label: "ACTIONS", align: "right" },
];
const tableContainerStyles = { marginTop: "40px", width: "800px", height: "800px", marginBottom: "100px" };

const OrdersTable = ({ orderHistory }: tableProps) => {
    return (
        <Box>
            <Typography sx={ { marginTop: "100px" } } variant="h3" component="h2">
                Orders History
            </Typography>
            <TableContainer sx={ tableContainerStyles } component={ Paper }>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            { TableHeaderData.map((header) => {
                                const tableHeaderStyles = {
                                    fontWeight: "bold",
                                    textAlign: header.align,
                                };
                                return (
                                    <TableCell key={ header.label } sx={ tableHeaderStyles }>
                                        { header.label }
                                    </TableCell>
                                );
                            }) }
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        <OrdersTableRow orderHistory={ orderHistory } />
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};
export default OrdersTable;
