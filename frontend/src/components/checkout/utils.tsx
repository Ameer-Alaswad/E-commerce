import { Product } from "../../contexts/shopping-cart-context/Types";

type CartTotals = {
    totalItemsPrice: number;
    shippingPrice: number;
    taxes: number;
    totalPrice: number;
};



export const calculateCartTotalPrices = (shoppingCartItems: Product[]): CartTotals => {

    const convertToTwoDecimal = (num: number) =>
        Math.round(num * 100 + Number.EPSILON) / 100;
    const totalItemsPrice = convertToTwoDecimal(
        shoppingCartItems.reduce((a, c) => a + c.quantity * c.price, 0)
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
