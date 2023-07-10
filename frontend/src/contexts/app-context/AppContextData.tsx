import { parseLocalStorage } from "../../utils/utils";
import { ShippingAddressDataType, UserData } from "./AppContextTypes";

export const initialShippingAddressData: ShippingAddressDataType = {
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
};

export const addressDataInStorage = parseLocalStorage(
    "shippingCardAddress",
    {} as ShippingAddressDataType
);

export const paymentMethodInStorage = parseLocalStorage(
    "paymentMethod",
    ""
);

export const userData = parseLocalStorage(
    "userData",
    null as UserData | null
);

