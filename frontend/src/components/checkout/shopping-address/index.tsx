
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ShoppingCartContext } from "../../../contexts/shopping-cart-context/shoppingCartContext";
import { ShippingAddressDataType } from "../../../contexts/shopping-cart-context/shoppingCartContextTypes";
import { toast } from "react-toastify";
import ShoppingAdressForm from "./ShoppingAdressForm";

const ShippingAddressUi = () => {

  const navigate = useNavigate();
  const shoppingCartContext = useContext(ShoppingCartContext);
  const {
    setShippingAddressData,
    shippingAddressData,
    userSignin,
    setProgressStep,
  } = shoppingCartContext;

  const [shippingAddress, setshippingAddress] =
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
    setshippingAddress({
      ...shippingAddress,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    setProgressStep(0);
    if (!userSignin) {
      navigate("/user/signin?redirect=/shipping");
      setTimeout(() => {
        toast.error("Sign in first !");
      }, 100);
    }
  }, [userSignin, navigate, setProgressStep]);

  const ShoppingAddressFormProps = { handleChange, handleSubmit, shippingAddress }

  return <ShoppingAdressForm { ...ShoppingAddressFormProps } />
};

export default ShippingAddressUi;
