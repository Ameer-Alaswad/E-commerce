import { Box, Stepper, Step, StepLabel } from "@mui/material";

import useAppContext from "../../hooks/useAppContext";
import useCheckoutContext from "../../hooks/useCheckoutContext";

const steps = ["Shipping Address", "Payment", "Place Order"];

const progressStepsContainer = {
    width: "100%", marginTop: "100PX"
}

export default function ProgressSteps() {
    const { progressStep } = useCheckoutContext()

    return (
        <Box sx={ progressStepsContainer }>
            <Stepper activeStep={ progressStep } alternativeLabel>
                {
                    steps.map((label) => (
                        <Step key={ label }>
                            <StepLabel>{ label }</StepLabel>
                        </Step>
                    ))
                }
            </Stepper>
        </ Box>
    );
}
