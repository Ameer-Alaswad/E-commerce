import { buttonHover } from "../cart-page/cartStyles"
import { orangeColor } from "../checkout/shipping-address/styles"


export const profileUpdateContainer = {
    marginTop: "60px",
}
export const formContainer = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
    justifyContent: "center",
}
export const updateProfileButton = {
    marginTop: "10px",
    fontSize: "0.9rem",
    backgroundColor: "#FF5722",
    color: "white",
    borderRadius: "10px",
    padding: "10px 20px",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
        backgroundColor: "#0000CD",

        animation: `${buttonHover} 0.3s ease-in-out`,
    },
}
export const profileUpdateFormStyles = {
    '& .MuiInputLabel-root': { color: orangeColor },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: orangeColor,
        },
        '&:hover fieldset': {
            borderColor: '#0000CD',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#0000CD',
        },
        '& input': {
            color: '#0000CD',
        },
    },
}