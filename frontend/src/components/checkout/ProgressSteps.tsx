import { useContext } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { ShoppingCartContext } from "../../contexts/shopping-cart-context/shoppingCartContext";

const steps = ["Shipping Address", "Payment", "Placing Order"];

export default function ProgressSteps() {
    const shoppingCartContext = useContext(ShoppingCartContext);
    const { progressStep } = shoppingCartContext;

    return (
        <Box sx={ {
            width: "100%", marginTop: "100PX"
        } }>
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
