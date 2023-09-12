import { ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import useCheckoutContext from "../../../hooks/context/useCheckoutContext";
import useSignInCheck from "../../../hooks/useSignInCheck";

import { PAYMENT_PATH, SHIPPING_PATH, SHOPPING_CART_PATH } from "../../constants/path";
import { SHIPPING_ADDRESS } from "../../constants/text";

import ProgressSteps from "../ProgressSteps";
import { Box, Typography } from "@mui/material";
import { formContainer, formTitle, mainContainer } from "../styles";

import ShoppingAddressForm from "./ShoppingAdressForm";
import ContinueButton from "./ContinueButton";
import GoBackButton from "../../GoBackButton";

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

  const handleShippingAddressDataChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setShippingAddressData({
      ...shippingAddressData,
      [event.target.name]: event.target.value,
    });
  };
  // this will handle setting the progressStep and redirecting the user if not signed in
  useSignInCheck(0, SHIPPING_PATH);

  const ShoppingAddressFormProps = {
    handleShippingAddressDataChange,
    shippingAddressData,
  };

  return (
    <>
      <ProgressSteps />
      <GoBackButton goBackLink={ SHOPPING_CART_PATH } />

      <Box sx={ mainContainer }>
        <Box
          sx={ formContainer }
          component="form"
          onSubmit={ handleSubmitShippingAddress }
        >
          <Typography sx={ formTitle } variant="h3">
            { SHIPPING_ADDRESS }
          </Typography>
          { shippingAddressData && (
            <ShoppingAddressForm { ...ShoppingAddressFormProps } />
          ) }
          <ContinueButton />
        </Box>
      </Box>
    </>
  );
};

export default ShippingAddressUi;
