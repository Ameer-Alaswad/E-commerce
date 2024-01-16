import { buttonHover } from "../../cart-page/cartStyles"
import { productInfoContainerStyles } from "../product-info-card/styles"

export const productSummaryCardContainerStyles = {
    ...productInfoContainerStyles
}
export const addToCartButtonStyles = {
    mt: 3,
    mb: 1,
    fontSize: "0.9rem",
    backgroundColor: "#FF5722",
    color: "white",
    borderRadius: "20px",
    padding: "10px 20px",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
        backgroundColor: "#0000CD",

        animation: `${buttonHover} 0.3s ease-in-out`,
    },
}