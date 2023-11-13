import { keyframes } from "@mui/system";

export const buttonHover = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
`;

export const cartContainerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
};
export const EmptyCartContainerStyles = {
    padding: "2rem",
    borderRadius: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",

}

export const emptyCardPaperStyles = {
    padding: "2rem",
    borderRadius: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#ADD8E6",

}
export const emptyCartButton = {
    backgroundColor: "#FF5722",
    color: "white",
    borderRadius: "20px",
    padding: "10px 20px",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
        animation: `${buttonHover} 0.3s ease-in-out`,
        backgroundColor: "#0000CD",
    },
}
export const cartCardStyle = {
    minWidth: 275,
    width: "600px",
    marginRight: "40px",
    backgroundColor: "#ADD8E6",
    borderRadius: "10px",
    padding: "20px",
};

export const totalCardStyle = {
    width: "300px",
    height: "150px",
    backgroundColor: "#ADD8E6"
};

export const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
};

export const buttonStyle = {
    width: "220px",
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

export const continueShoppingButtonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    height: "35px",
    marginLeft: "15px",
};
export const emptyCartContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
};
