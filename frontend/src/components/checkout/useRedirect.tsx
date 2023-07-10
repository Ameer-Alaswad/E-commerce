// Requires Refactoring 
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userSignedIn } from "../../contexts/app-context/AppContextTypes";

type PaymentRedirectProps = {
    userSignedIn: userSignedIn | null;
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
        userSignedIn,
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
        if (!userSignedIn) {
            navigate(userNotSignedLink);
            setTimeout(() => {
                toast.error(userNotSignedMessage);
                return;
            }, 100);
        }
        if (userSignedIn) {
            if (!shippingAddressData) {
                navigate(redirectLink);
                setTimeout(() => {
                    toast.error(redirectMessage);
                }, 100);
            }
        }
    }, [
        userSignedIn,
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
