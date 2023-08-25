import axios from "axios";
import { toast } from "react-toastify";
import { OrderData } from "../../contexts/orders-context/Types";
import { checkUserLoggedIn } from "../../utils/utils";


export const createOrder = (data: OrderData | null, actions: any) => {
    return actions.order
        .create({
            purchase_units: [
                {
                    amount: { value: data?.totalPrice },

                },
            ],
        })
        .then((orderId: string) => {
            return orderId;
        });
};
export const onApprove = async (
    orderData: OrderData,
    details: any,
    userSignedIn: any
) => {
    const userSigned = checkUserLoggedIn(userSignedIn)
    try {
        const { data } = await axios.put(
            `/api/orders/${orderData?._id}/pay`,
            details,
            {
                headers: { authorization: `Bearer ${userSigned?.token}` },
            }
        );
        toast.success("Order is paid");
    } catch (error) {
        toast.error("Payment failed");
    }
};

export const onError = (err: any) => {
    toast.error(err);
};
