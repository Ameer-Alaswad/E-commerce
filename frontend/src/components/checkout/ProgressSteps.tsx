import { useContext } from "react";

import { Box, Stepper, Step, StepLabel } from "@mui/material";

import { ShoppingCartContext } from "../../contexts/shopping-cart-context/shoppingCartContext";

const steps = ["Shipping Address", "Payment", "Place Order"];

const progressStepsContainer = {
    width: "100%", marginTop: "100PX"
}

export default function ProgressSteps() {
    const shoppingCartContext = useContext(ShoppingCartContext);
    const { progressStep } = shoppingCartContext;

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
