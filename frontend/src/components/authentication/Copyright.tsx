import { Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { COPYRIGHT, WEBSITE_TITLE } from "../constants/text";

const Copyright = (props: any) => {
    return (
        <Typography sx={ { color: "#0000CD" } } variant="body2" color="text.secondary" align="center" { ...props }>
            { COPYRIGHT }
            <RouterLink to="/" style={ { color: "#0000CD" } }>
                { WEBSITE_TITLE }
            </RouterLink>{ " " }
            { new Date().getFullYear() }.
        </Typography>
    );
};

export default Copyright;