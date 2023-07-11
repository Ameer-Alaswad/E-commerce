import { Box, Button, TextField, Typography } from "@mui/material";
import ProgressSteps from "../ProgressSteps";
import { ShippingAddressDataType } from "../../../contexts/checkout-context/Types";
import { shoppingAddressStyles } from "../styles";

const { mainContainer, formContainer, formTitle, formButton } = shoppingAddressStyles

type ShoppingAddressFormType = {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    shippingAddress: ShippingAddressDataType
}

const ShoppingAdressForm = ({ handleChange, handleSubmit, shippingAddress }: ShoppingAddressFormType) => {

    return (
        <>
            <ProgressSteps />
            <Box
                sx={ mainContainer }
            >
                <Box
                    sx={ formContainer }
                    component="form"
                    onSubmit={ handleSubmit }
                >
                    <Typography sx={ formTitle } variant="h3">
                        Shipping Address
                    </Typography>
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
                        sx={ formButton }
                    >
                        Continue
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default ShoppingAdressForm