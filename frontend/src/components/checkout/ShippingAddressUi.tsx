import { Box, Button, TextField, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../contexts/shopping-cart-context/shoppingCartContext";
import { ShippingAddressDataType } from "../../contexts/shopping-cart-context/shoppingCartContextTypes";
import { toast } from "react-toastify"
import ProgressSteps from "./ProgressSteps";

const ShippingAddressUi = () => {
  const navigate = useNavigate()
  const shoppingCartContext = useContext(ShoppingCartContext);
  const { setShippingAddresData, shippingAddresData, userSignin, setProgressStep } = shoppingCartContext;
  const [shippingAddress, setshippingAddress] = useState<ShippingAddressDataType>({
    fullName: shippingAddresData?.fullName || "",
    address: shippingAddresData?.address || "",
    city: shippingAddresData?.city || "",
    postalCode: shippingAddresData?.postalCode || "",
    country: shippingAddresData?.country || ""
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShippingAddresData(shippingAddress)
    localStorage.setItem("shippingCardAddress", JSON.stringify(shippingAddress))
    navigate("/payment")
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setshippingAddress({ ...shippingAddress, [event.target.name]: event.target.value })
  }
  const user: any = localStorage.getItem('userData')
  const parsedUser = JSON.parse(user)
  let userSigned = userSignin || parsedUser

  useEffect(() => {
    setProgressStep(0)
    if (!userSigned) {
      navigate("/user/signin?redirect=/shipping")
      setTimeout(() => {
        toast.error("Sign in first !")
      }, 100);
    }
  }, [userSigned, navigate, setProgressStep])


  return (
    <>
      <ProgressSteps />
      <Box
        sx={ {
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          height: "100vh",
        } }
      >
        <Box sx={ { width: "600px", marginTop: "170px" } } component="form" onSubmit={ handleSubmit }>
          <Typography sx={ { textAlign: "center" } } variant="h3">Shipping Address</Typography>
          <TextField
            onChange={ handleChange }
            margin="normal"
            required
            fullWidth
            value={ shippingAddress?.fullName }
            id="fullName"
            label="FullName"
            name="fullName"
            autoComplete="fullName"
            autoFocus
          />
          <TextField
            onChange={ handleChange }
            margin="normal"
            required
            fullWidth
            value={ shippingAddress?.address }
            name="address"
            label="Address"
            id="address"
            autoComplete="address"
          />
          <TextField
            onChange={ handleChange }
            margin="normal"
            required
            fullWidth
            value={ shippingAddress?.city }
            name="city"
            label="City"
            id="city"
            autoComplete="city"
          />
          <TextField
            onChange={ handleChange }
            margin="normal"
            required
            fullWidth
            value={ shippingAddress?.postalCode }
            name="postalCode"
            label="Postal code"
            id="postalCode"
            autoComplete="postalCode"
          />
          <TextField
            onChange={ handleChange }
            margin="normal"
            required
            fullWidth
            value={ shippingAddress?.country }
            name="country"
            label="Country"
            id="country"
            autoComplete="country"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={ { mt: 3, mb: 2 } }
          >
            Continue
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ShippingAddressUi;
