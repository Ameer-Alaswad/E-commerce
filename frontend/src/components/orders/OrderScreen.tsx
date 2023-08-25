// Requires rafactoring 
import { Card, CardContent, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchOrder } from "../../fetchers/fetchOrder";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import axios from "axios";
import useUserAuthContext from "../../hooks/context/useUserAuthContext";
import useOrdersContext from "../../hooks/context/useOrdersContext";
import { checkUserLoggedIn } from "../../utils/utils";

const OrderScreen = () => {
    const navigate = useNavigate();
    const { setOrderData, orderData } = useOrdersContext()
    const { userSignedIn } = useUserAuthContext()
    console.log("inpay", orderData);

    const userSigned = checkUserLoggedIn(userSignedIn)

    const { id: orderId } = useParams();

    const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

    const createOrder = (data: any, actions: any) => {
        return actions.order
            .create({
                purchase_units: [
                    {
                        amount: { value: orderData?.totalPrice },

                    },
                ],
            })
            .then((orderId: string) => {
                return orderId;
            });
    };

    const onApprove = (data: any, actions: any) => {
        return actions.order.capture().then(async (details: any) => {
            try {
                const { data } = await axios.put(
                    `/api/orders/${orderData?._id}/pay`,
                    details,
                    {
                        headers: { authorization: `Bearer ${userSigned?.token}` },
                    }
                );
                toast.success('Order is paid')
            } catch (error) {
                toast.error("Payment failed");
            }
        });
    };
    const onError = (err: any) => {
        toast.error(err)
    }

    useEffect(() => {
        if (!userSigned) {
            navigate("/user/signin");
            setTimeout(() => {
                toast.error("Sign in first !");
            }, 100);
        }
        if (!orderData?._id) {
            fetchOrder(`/api/orders/${orderId}`, userSigned, setOrderData);
        } else {
            const loadPaypalScript = async () => {
                const { data: clientId } = await axios.get("/api/keys/paypal", {
                    headers: { authorization: `Bearer ${userSigned?.token}` },
                });
                paypalDispatch({
                    type: "resetOptions",
                    value: {
                        "client-id": clientId,
                        currency: "USD",
                    },
                });
                paypalDispatch({
                    type: "setLoadingStatus",
                    value: "pending" as any,
                });
            };
            loadPaypalScript();
        }
    }, [userSigned, navigate, orderId, setOrderData, paypalDispatch, orderData]);

    return (
        <>
            <Box
                sx={ {
                    display: "flex",
                    margin: "0 auto",
                    justifyContent: "space-between",
                    marginTop: "120px",
                    width: "1000px",
                } }
            >
                { orderData ? (
                    <Box>
                        <Typography sx={ { marginBottom: "15px" } } variant="h3">
                            Preview Order
                        </Typography>
                        <Card sx={ { minWidth: 275, width: "600px", marginBottom: "15px" } }>
                            <CardContent>
                                <Typography
                                    sx={ { marginBottom: "10px" } }
                                    fontWeight="fontWeightBold"
                                >
                                    Shipping
                                </Typography>
                                <Typography variant="body1">
                                    <strong>Name:</strong> { orderData?.shippingAddress?.fullName }
                                </Typography>
                                <Typography variant="body1">
                                    <strong>Address:</strong>{ " " }
                                    { orderData?.shippingAddress?.address }
                                </Typography>
                                <Typography
                                    sx={
                                        !orderData?.isDelivered
                                            ? { color: "red" }
                                            : { color: "green" }
                                    }
                                    variant="body1"
                                >
                                    { orderData?.isDelivered ? "Delivered" : "Not Delivered" }
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={ { minWidth: 275, width: "600px", marginBottom: "15px" } }>
                            <CardContent>
                                <Typography
                                    variant="h5"
                                    sx={ { marginBottom: "10px" } }
                                    fontWeight="fontWeightBold"
                                >
                                    Payment
                                </Typography>
                                <Typography variant="body1">
                                    <strong>Method:</strong> { orderData?.paymentMethod }
                                </Typography>
                                <Typography
                                    sx={
                                        !orderData?.isPaid ? { color: "red" } : { color: "green" }
                                    }
                                    variant="body1"
                                >
                                    { orderData?.isPaid ? "Paid" : "Not Paid" }
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={ { minWidth: 275, width: "600px" } }>
                            <CardContent>
                                <Typography
                                    sx={ { marginBottom: "10px" } }
                                    fontWeight="fontWeightBold"
                                >
                                    Items
                                </Typography>
                                { orderData?.orderItems
                                    ? orderData.orderItems.map((item) => {
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
                                                        src={ item?.image }
                                                        alt="items-img"
                                                    />
                                                </Card>
                                                <Typography>{ item?.productId }</Typography>
                                                <Typography>{ item?.quantity }</Typography>
                                                <Typography>{ item?.price }$</Typography>
                                            </Card>
                                        );
                                    })
                                    : null }
                            </CardContent>
                        </Card>
                    </Box>
                ) : null }
                <Card
                    sx={ {
                        width: "300px",
                        height: "400px",
                    } }
                >
                    <CardContent>
                        <Typography
                            sx={ { marginBottom: "10px" } }
                            variant="h5"
                            fontWeight="fontWeightBold"
                        >
                            { " " }
                            Order Summary
                        </Typography>
                        <Box sx={ { marginLeft: "10px" } }>
                            <Typography sx={ { paddingTop: "10px", paddingBottom: "10px" } }>
                                Items: ${ orderData?.itemsPrice }
                            </Typography>
                            <Divider />
                            <Typography sx={ { paddingTop: "10px", paddingBottom: "10px" } }>
                                Shipping: ${ orderData?.shippingPrice }
                            </Typography>
                            <Divider />
                            <Typography sx={ { paddingTop: "10px", paddingBottom: "10px" } }>
                                Tax: ${ orderData?.taxPrice }
                            </Typography>
                            <Divider />
                            <Typography
                                sx={ { paddingTop: "10px", paddingBottom: "10px" } }
                                fontWeight="fontWeightBold"
                            >
                                Total: ${ orderData?.totalPrice }
                            </Typography>

                            { !orderData?.isPaid ? (
                                <Box
                                    sx={ {
                                        display: "flex",
                                        justifyContent: "center",
                                    } }
                                >
                                    <div>

                                        <PayPalButtons
                                            createOrder={ createOrder }
                                            onApprove={ onApprove }
                                            onError={ onError }
                                        ></PayPalButtons>
                                    </div>

                                </Box>
                            ) : null }
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </>
    );
};

export default OrderScreen;