import { FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import ShoppingAdressForm from "./ShoppingAdressForm";
import useUserAuthContext from "../../../hooks/context/useUserAuthContext";
import useCheckoutContext from "../../../hooks/context/useCheckoutContext";

const ShippingAddressUi = () => {
  const navigate = useNavigate();
  const { setShippingAddressData, shippingAddressData, setProgressStep } =
    useCheckoutContext();
  const { userSignedIn } = useUserAuthContext();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShippingAddressData(shippingAddressData);
    localStorage.setItem(
      "shippingCardAddress",
      JSON.stringify(shippingAddressData)
    );
    navigate("/payment");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShippingAddressData({
      ...shippingAddressData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    setProgressStep(0);
    if (!userSignedIn) {
      navigate("/user/signin?redirect=/shipping");
      setTimeout(() => {
        toast.error("Sign in first !");
      }, 100);
    }
  }, [userSignedIn, navigate, setProgressStep]);

  const ShoppingAddressFormProps = {
    handleChange,
    handleSubmit,
    shippingAddressData,
  };

  return <ShoppingAdressForm { ...ShoppingAddressFormProps } />;
};

export default ShippingAddressUi;
