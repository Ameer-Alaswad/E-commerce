import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userSignin } from "../../contexts/shopping-cart-context/shoppingCartContextTypes";


const usePaymentRedirect = (
    userSignin: userSignin | null,
    setProgressStep: (step: number) => void,
    shippingAddressData: { address: string },
) => {
    const navigate = useNavigate();


    useEffect(() => {
        setProgressStep(1);
        if (!userSignin) {
            navigate("/user/signin?redirect=/payment");
            setTimeout(() => {
                toast.error("Sign in first!");
                return;
            }, 100);
        }
        if (userSignin) {
            if (!shippingAddressData.address) {
                navigate("/shipping?redirect=/payment");
                setTimeout(() => {
                    toast.error("Add your Address first!");
                }, 100);
            }
        }
    }, [userSignin, navigate, setProgressStep, shippingAddressData]);
};

export default usePaymentRedirect;
