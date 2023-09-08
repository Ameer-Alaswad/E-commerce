import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { landingLinkStyles, linkDisplayStyles } from "./styles";
import { HOME_PATH } from "../constants/path";

const DisplaySiteName = () =>

    <Link to={ HOME_PATH } style={ landingLinkStyles }>
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={ { display: { ...linkDisplayStyles }, color: "#ff5200" } }
        >
            FashionHub
        </Typography>
    </Link>


export default DisplaySiteName;
