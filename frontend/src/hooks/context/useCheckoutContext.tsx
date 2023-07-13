import { useContext } from "react";
import { CheckoutContext } from "../../contexts/checkout-context";

const useCheckoutContext = () => {
    const {
        shippingAddressData,
        setShippingAddressData,
        progressStep,
        setProgressStep,
        paymentMethod,
        setPaymentMethod,
    } = useContext(CheckoutContext);

    return {
        shippingAddressData,
        setShippingAddressData,
        progressStep,
        setProgressStep,
        paymentMethod,
        setPaymentMethod,
    };
};

export default useCheckoutContext;
