import { Product } from "../../contexts/app-context/AppContextTypes";

type PaymentRedirectProps = {
    progressStepNumber: number;
    pageName: string;
    errorMessage: string;
    stepName: string;
    redirectName: string;
};

type CartTotals = {
    totalItemsPrice: number;
    shippingPrice: number;
    taxes: number;
    totalPrice: number;
};
export const getPaymentRedirectProps = ({
    progressStepNumber,
    pageName,
    errorMessage,
    stepName,
    redirectName,
}: PaymentRedirectProps) => {
    const progressStep = progressStepNumber;
    const userNotSignedLink = `/user/signin?redirect=/${pageName}`;
    const userNotSignedMessage = "Sign in first!";
    const redirectLink = `/${redirectName}?redirect=/${stepName}`;
    const redirectMessage = errorMessage;

    return {
        progressStep,
        userNotSignedLink,
        userNotSignedMessage,
        redirectLink,
        redirectMessage,
    };
};

export const calculateCartTotalPrices = (cartItems: Product[]): CartTotals => {

    const convertToTwoDecimal = (num: number) =>
        Math.round(num * 100 + Number.EPSILON) / 100;
    const totalItemsPrice = convertToTwoDecimal(
        cartItems.reduce((a, c) => a + c.quantity * c.price, 0)
    );

    const shippingPrice =
        totalItemsPrice > 100 ? convertToTwoDecimal(0) : convertToTwoDecimal(10);

    const taxes = convertToTwoDecimal(0.15 * totalItemsPrice);

    const totalPrice = totalItemsPrice + shippingPrice + taxes;

    return {
        totalItemsPrice,
        shippingPrice,
        taxes,
        totalPrice,
    };
};
