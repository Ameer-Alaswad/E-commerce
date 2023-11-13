import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

type GoBackButtonProps = {
    goBackLink: string;
};

const GoBackButton: React.FC<GoBackButtonProps> = ({ goBackLink }) => {
    const orangeColor = "#FF5722";

    const goBackButtonStyles = {
        width: "50px",
        height: "50px",
        marginLeft: "100px",
        color: "#0000CD",
        border: "2px solid #0000CD",
        borderRadius: "5px",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
            color: orangeColor,
            borderColor: orangeColor,
            animation: "colorAnimation 3s infinite alternate",
        },
    }

    return (
        <IconButton
            sx={ goBackButtonStyles }
            aria-label="Go Back"
            component={ Link }
            to={ goBackLink }
        >
            <ArrowBackIcon />
        </IconButton>
    );
};

export default GoBackButton;
