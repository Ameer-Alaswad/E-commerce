import { Typography } from "@mui/material";
import { heading } from "../styles";
import { PAYMENT_METHOD_TEXT } from "../../constants/text";

const Title = () => {
  return (
    <Typography sx={ heading } variant="h4">
      { PAYMENT_METHOD_TEXT }
    </Typography>
  );
};

export default Title;
