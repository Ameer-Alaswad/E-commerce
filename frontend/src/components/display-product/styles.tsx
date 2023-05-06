const baseStyles = {
    paddingTop: "10px",
    paddingBottom: "10px",
};

const styles = {
    container: {
        marginTop: "80px",
        height: "100vh",
    },
    contentContainer: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-start",
        width: "1200px",
    },
    imageContainer: {
        width: "500px",
    },
    productQuantityContainer: {
        ...baseStyles,
        paddingTop: "20px",
    },
    productInfoContainer: {
        ...baseStyles,
        marginLeft: "10px",
    },
    productNameStyles: {
        ...baseStyles,
    },
    ratingContainer: {
        ...baseStyles,
    },
    priceContainer: {
        ...baseStyles,
    },
    descriptionContainer: {
        ...baseStyles,
    },
    cardContainer: {
        width: "250px",
        height: "180px",
    },
    cardContentContainer: {
        marginLeft: "10px",
    },
    cardPriceContainer: {
        ...baseStyles,
    },
    cardStatusContainer: {
        ...baseStyles,
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "center",
    },
    addToCartButton: {
        width: "220px",
    },
};

export default styles;
