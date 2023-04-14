// Footer.tsx
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from "@mui/icons-material/Public";
import { Box, Button } from "@mui/material";



const Footer: React.FC = () => {
    return (
        <Box
            sx={ {

                width: "100%",
                height: "50px",
                backgroundColor: "#f2f2f2",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            } }
        >
            <Box>Ameer Alaswad</Box>
            <Box sx={ { display: "flex", alignItems: "center" } }>
                <Button
                    sx={ { marginLeft: 1 } }
                    aria-label="portfolio"
                    href="https://ameer-alaswad.netlify.app/"
                >
                    <PublicIcon sx={ { fontSize: "1.5rem" } } />
                </Button>
                <Button
                    sx={ { marginLeft: 1 } }
                    aria-label="LinkedIn"
                    href="https://www.linkedin.com/in/ameer-alaswad-27219a207/"
                >
                    <LinkedInIcon sx={ { fontSize: "1.5rem" } } />
                </Button>
                <Button
                    sx={ { marginLeft: 1 } }
                    aria-label="GitHub"
                    href="https://github.com/Ameer-Alaswad"
                >
                    <GitHubIcon sx={ { fontSize: "1.5rem" } } />
                </Button>
            </Box>
        </Box>
    );
};

export default Footer;