import useCheckoutContext from "../../hooks/context/useCheckoutContext";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["Shipping Address", "Payment", "Place Order"];

const progressStepsContainer = {
    width: "100%",
    marginTop: "100px", // Should be lowercase 'px'
};

export default function ProgressSteps() {
    const { progressStep } = useCheckoutContext();

    return (
        <Box sx={ progressStepsContainer }>
            <Stepper activeStep={ progressStep } alternativeLabel>
                { steps.map((label, index) => (
                    <Step key={ label }>
                        <StepLabel sx={
                            index === progressStep
                                ? {
                                    "& .MuiStepIcon-root": {
                                        color: "#FFA500",
                                    },
                                    "& .MuiStepLabel-label": {
                                        color: "#0000CD",
                                    },
                                }
                                : {}

                        }> { label }</StepLabel>
                    </Step>
                )) }
            </Stepper>
        </Box>
    );
}
