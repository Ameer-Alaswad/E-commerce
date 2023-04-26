import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from "@mui/icons-material/Public";
import { Box, Button } from "@mui/material";

const styles = {
    container: {
        position: "absolute",
        bottom: "0",
        width: "100%",
        height: "50px",
        backgroundColor: "#f2f2f2",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    copy: {
        marginLeft: "5px",
    },
    buttonGroup: {
        display: "flex",
        alignItems: "center",
    },
    Button: {
        marginLeft: 1,
        fontSize: "1.5rem",
    },
};

const Footer: React.FC = () => {
    return (
        <Box id="footer-container" sx={ styles.container }>
            <Box sx={ styles.copy }>
                Copyright © Ameer Alaswad 2023.
            </Box>
            <Box sx={ styles.buttonGroup }>
                <Button
                    sx={ styles.Button }
                    aria-label="portfolio"
                    href="https://ameer-alaswad.netlify.app/"
                >
                    <PublicIcon />
                </Button>
                <Button
                    sx={ styles.Button }
                    aria-label="LinkedIn"
                    href="https://www.linkedin.com/in/ameer-alaswad-27219a207/"
                >
                    <LinkedInIcon />
                </Button>
                <Button
                    sx={ styles.Button }
                    aria-label="GitHub"
                    href="https://github.com/Ameer-Alaswad"
                >
                    <GitHubIcon />
                </Button>
            </Box>
        </Box>
    );
};

export default Footer;