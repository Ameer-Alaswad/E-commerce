import { buttonHover } from "../cart-page/cartStyles";

export const formButton = {
    mt: 3,
    mb: 2,
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
};
export const formTitle = {
    textAlign: "center",
};
export const mainContainer = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100vh",
};
export const formContainer = {
    width: "600px",
    marginTop: "170px",
};

export const paymentUiContainerStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100vh",
};
export const paymentUiFormStyles = {
    width: "600px",
    marginTop: "170px",
};
export const heading = {
    textAlign: "center",
};
export const submitMethodButtonStyles = {
    mt: 3,
    mb: 2,
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
};

export const orderSummaryContainerStyles = {
    width: "300px",
    height: "400px",
};
export const orderSummaryTitleStyles = {
    marginBottom: "10px",
};
export const pricesContainerStyles = {
    marginLeft: "10px",
};

export const itemsPriceStyles = {
    paddingTop: "10px",
    paddingBottom: "10px",
};
export const shippingInfoStyles = {
    ...itemsPriceStyles,
};

export const taxStyles = {
    ...itemsPriceStyles,
};

export const totalPriceStyles = {
    ...itemsPriceStyles,
};
export const placeOrderButtonStyles = {
    display: "flex",
    justifyContent: "center",
    height: "100%",
};
export const divider = {
    marginTop: "10px",
    marginBottom: "10px",
};

export const placeOrderContainerStyles = { height: "100vh" };
export const ordersDetailsContainer = {
    display: "flex",
    margin: "0 auto",
    justifyContent: "space-between",
    marginTop: "60px",
    width: "1000px",
};

export const previewOrderTitleStyles = {
    marginBottom: "15px",
};

export const shippingInfoContainerStyles = {
    minWidth: 275,
    width: "600px",
    marginBottom: "15px",
};

export const shippingInfoTitleStyles = {
    marginBottom: "10px",
};
export const paymentMethodContainerStyles = {
    minWidth: 275,
    width: "600px",
    marginBottom: "15px",
};
export const paymentMethodTitleStyles = {
    marginBottom: "10px",
    fontWeight: "bold",
};
export const orderItemsContainerStyles = {
    minWidth: 275,
    width: "600px",
    marginBottom: "15px",
};
export const orderItemsTitleStyles = {
    marginBottom: "10px",
    fontWeight: "bold",
};

export const itemsContainerStyles = {
    width: "500px",
    minWidth: 330,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#ffffff",
    border: "1px solid #dddddd",
    marginBottom: "10px",
    transition: "transform 0.2s",
    "&:hover": {
        transform: "scale(1.01)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
};

export const itemImageStyles = {
    width: "60px",
    height: "80px",
};
export const deleteItemButton = {
    fontSize: "0.7rem",
    backgroundColor: "#FF5722",
    color: "white",
    borderRadius: "20px",
    padding: "10px 20px",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
        backgroundColor: "#0000CD",

        animation: `${buttonHover} 0.3s ease-in-out`,
    },
};

export const itemsContainer = { maxHeight: "600px", overflow: "auto", }