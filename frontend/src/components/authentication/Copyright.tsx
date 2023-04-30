import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";

const Copyright = (props: any) => {
    const navigate = useNavigate();

    const handleClick = () => navigate("/");

    return (
        <Typography variant="body2" color="text.secondary" align="center" { ...props }>
            { "Copyright © " }
            <Link color="inherit" onClick={ handleClick }>
                Your Website
            </Link>{ " " }
            { new Date().getFullYear() }{ "." }
        </Typography>
    );
};

export default Copyright;
