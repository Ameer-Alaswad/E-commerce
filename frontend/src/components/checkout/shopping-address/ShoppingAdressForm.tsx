import { TextField } from "@mui/material";
import { ShippingAddressDataType } from "../../../contexts/checkout-context/Types";
import { ChangeEvent } from "react";

type ShoppingAddressFormType = {
    handleShippingAddressDataChange: (event: ChangeEvent<HTMLInputElement>) => void;
    shippingAddressData: ShippingAddressDataType;
};

const ShoppingAddressForm = ({
    handleShippingAddressDataChange,
    shippingAddressData,
}: ShoppingAddressFormType) => {
    return (
        <>
            <TextField
                onChange={ handleShippingAddressDataChange }
                margin="normal"
                required
                fullWidth
                value={ shippingAddressData?.fullName }
                id="fullName"
                label="FullName"
                name="fullName"
                autoComplete="fullName"
                autoFocus
            />
            <TextField
                onChange={ handleShippingAddressDataChange }
                margin="normal"
                required
                fullWidth
                value={ shippingAddressData?.address }
                name="address"
                label="Address"
                id="address"
                autoComplete="address"
            />
            <TextField
                onChange={ handleShippingAddressDataChange }
                margin="normal"
                required
                fullWidth
                value={ shippingAddressData?.city }
                name="city"
                label="City"
                id="city"
                autoComplete="city"
            />
            <TextField
                onChange={ handleShippingAddressDataChange }
                margin="normal"
                required
                fullWidth
                value={ shippingAddressData?.postalCode }
                name="postalCode"
                label="Postal code"
                id="postalCode"
                autoComplete="postalCode"
            />
            <TextField
                onChange={ handleShippingAddressDataChange }
                margin="normal"
                required
                fullWidth
                value={ shippingAddressData?.country }
                name="country"
                label="Country"
                id="country"
                autoComplete="country"
            />
        </>
    );
};

export default ShoppingAddressForm;
