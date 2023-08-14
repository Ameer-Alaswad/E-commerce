import { ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import useCheckoutContext from "../../../hooks/context/useCheckoutContext";
import { PAYMENT_PATH, SHIPPING_PATH } from "../../constants/path";
import ProgressSteps from "../ProgressSteps";
import { Box, Typography } from "@mui/material";
import { formContainer, formTitle, mainContainer } from "../styles";
import ShoppingAddressForm from "./ShoppingAdressForm";
import ContinueButton from "./ContinueButton";
import useSignInCheck from "../../../hooks/useSignInCheck";

const ShippingAddressUi = () => {
  const navigate = useNavigate();
  const { setShippingAddressData, shippingAddressData } = useCheckoutContext();

  const handleSubmitShippingAddress = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShippingAddressData(shippingAddressData);
    localStorage.setItem(
      "shippingCardAddress",
      JSON.stringify(shippingAddressData)
    );
    navigate(PAYMENT_PATH);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setShippingAddressData({
      ...shippingAddressData,
      [event.target.name]: event.target.value,
    });
  };
  // this will handle setting the progressStep and redirecting the user if not signed in
  useSignInCheck(0, SHIPPING_PATH);

  const ShoppingAddressFormProps = {
    handleChange,
    shippingAddressData,
  };

  return (
    <>
      <ProgressSteps />
      <Box sx={ mainContainer }>
        <Box
          sx={ formContainer }
          component="form"
          onSubmit={ handleSubmitShippingAddress }
        >
          <Typography sx={ formTitle } variant="h3">
            Shipping Address
          </Typography>
          <ShoppingAddressForm { ...ShoppingAddressFormProps } />
          <ContinueButton />
        </Box>
      </Box>
    </>
  );
};

export default ShippingAddressUi;
