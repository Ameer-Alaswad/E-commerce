import { keyframes } from "@mui/system";

export const productTitleStyles = { textAlign: "center", marginTop: "90px" };
export const productContainerStyles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    maxWidth: "1250px",
    margin: "0 auto",
    marginTop: "50px",
};
export const productCardContainerStyles = {
    maxWidth: 500,
    marginBottom: "60px",
    width: "400px",
};
export const productImageStyles = {
    height: "390px",
    width: "100%",
    objectFit: "contain",
};
export const productPriceStyles = {
    marginBottom: 0,
};
export const productDescriptionStyles = {
    marginBottom: "16px",
};

export const quantityStyle = {
    marginTop: "7px",
    fontWeight: "bold",
};

export const ratingContainerStyles = {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
}
export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;