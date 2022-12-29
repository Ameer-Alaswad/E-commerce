import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";

function Copyright(props: any) {
    const navigate = useNavigate()
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            { ...props }
        >
            { "Copyright © " }
            <Link color="inherit" onClick={ () => navigate("/") }>
                Your Website
            </Link>{ " " }
            { new Date().getFullYear() }
            { "." }
        </Typography>
    );
}
export default Copyright