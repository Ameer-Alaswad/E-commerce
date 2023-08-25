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
    const { fullName, address, city, postalCode, country } = shippingAddressData;

    return (
        <>
            <TextField
                onChange={ handleShippingAddressDataChange }
                margin="normal"
                required
                fullWidth
                value={ fullName }
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
                value={ address }
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
                value={ city }
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
                value={ postalCode }
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
                value={ country }
                name="country"
                label="Country"
                id="country"
                autoComplete="country"
            />
        </>
    );
};

export default ShoppingAddressForm;
