// Material ui
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const loadingIconContainerStyle = { display: "flex", marginTop: "200px" };

const AnimatedLoadingIcon = () => {
    return (
        <Box sx={ loadingIconContainerStyle }>
            <CircularProgress />
        </Box>
    );
};
export default AnimatedLoadingIcon;
