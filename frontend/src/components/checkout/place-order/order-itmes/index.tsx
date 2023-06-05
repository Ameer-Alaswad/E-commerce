import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
} from "@mui/material";

import { useNavigate } from 'react-router-dom';
import ItemsList from './ItemsList';
import { placeOrderComponentsStyles } from '../../styles';

const { container, title } = placeOrderComponentsStyles;

export default function Items() {

    const navigate = useNavigate()

    const handleNavigate = () => navigate("/cart");

    return (
        <Card sx={ container }>
            <CardContent>
                <Typography sx={ title } fontWeight="fontWeightBold">
                    Items
                </Typography>
                <ItemsList />
            </CardContent>
            <CardActions>
                <Button onClick={ handleNavigate } size="small">Edit</Button>
            </CardActions>
        </Card>
    );
}