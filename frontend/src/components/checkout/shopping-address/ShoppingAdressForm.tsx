import { TextField } from "@mui/material";
import { ShippingAddressDataType } from "../../../contexts/checkout-context/Types";

type ShoppingAddressFormType = {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    shippingAddressData: ShippingAddressDataType;
};

const ShoppingAddressForm = ({
    handleChange,
    shippingAddressData,
}: ShoppingAddressFormType) => {
    return (
        <>
            <TextField
                onChange={ handleChange }
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
                onChange={ handleChange }
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
                onChange={ handleChange }
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
                onChange={ handleChange }
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
                onChange={ handleChange }
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
