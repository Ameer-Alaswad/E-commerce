import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userSignin } from "../../contexts/shopping-cart-context/shoppingCartContextTypes";

type PaymentRedirectProps = {
    userSignin: userSignin | null;
    setProgressStep: (step: number) => void;
    progressStep: number;
    userNotSignedLink: string;
    userNotSignedMessage: string;
    redirectLink: string;
    redirectMessage: string;
};
type ShippingAddressData = string

const useRedirect = (
    {
        userSignin,
        setProgressStep,
        progressStep,
        userNotSignedLink,
        userNotSignedMessage,
        redirectLink,
        redirectMessage,
    }: PaymentRedirectProps,
    shippingAddressData: ShippingAddressData
) => {
    const navigate = useNavigate();

    useEffect(() => {
        setProgressStep(progressStep);
        if (!userSignin) {
            navigate(userNotSignedLink);
            setTimeout(() => {
                toast.error(userNotSignedMessage);
                return;
            }, 100);
        }
        if (userSignin) {
            if (!shippingAddressData) {
                navigate(redirectLink);
                setTimeout(() => {
                    toast.error(redirectMessage);
                }, 100);
            }
        }
    }, [
        userSignin,
        navigate,
        setProgressStep,
        shippingAddressData,
        progressStep,
        userNotSignedLink,
        userNotSignedMessage,
        redirectLink,
        redirectMessage,
    ]);
};

export default useRedirect;
