import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ShippingAddressDataType } from "../../../contexts/app-context/AppContextTypes";
import { toast } from "react-toastify";
import ShoppingAdressForm from "./ShoppingAdressForm";
import useAppContext from "../../../hooks/useAppContext";
import useUserAuthContext from "../../../hooks/useUserAuthContext";

const ShippingAddressUi = () => {

  const navigate = useNavigate();
  const {
    setShippingAddressData,
    shippingAddressData,
    setProgressStep,
  } = useAppContext()
  const {
    userSignedIn,

  } = useUserAuthContext()

  const [shippingAddress, setShippingAddress] =
    useState<ShippingAddressDataType>({
      fullName: shippingAddressData?.fullName || "",
      address: shippingAddressData?.address || "",
      city: shippingAddressData?.city || "",
      postalCode: shippingAddressData?.postalCode || "",
      country: shippingAddressData?.country || "",
    });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShippingAddressData(shippingAddress);
    localStorage.setItem(
      "shippingCardAddress",
      JSON.stringify(shippingAddress)
    );
    navigate("/payment");

  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShippingAddress({
      ...shippingAddress,
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

  const ShoppingAddressFormProps = { handleChange, handleSubmit, shippingAddress }

  return <ShoppingAdressForm { ...ShoppingAddressFormProps } />
};

export default ShippingAddressUi;
