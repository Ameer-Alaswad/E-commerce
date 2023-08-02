import { Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { COPYRIGHT, WEBSITE_TITLE } from "../constants/text";

const Copyright = (props: any) => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" { ...props }>
            { COPYRIGHT }
            <RouterLink to="/" style={ { color: "inherit" } }>
                { WEBSITE_TITLE }
            </RouterLink>{ " " }
            { new Date().getFullYear() }.
        </Typography>
    );
};

export default Copyright;
