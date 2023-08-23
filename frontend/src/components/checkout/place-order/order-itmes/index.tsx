import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
} from "@mui/material";

import { useNavigate } from 'react-router-dom';
import ItemsList from './ItemsList';
import { orderItemsContainerStyles, orderItemsTitleStyles } from '../../styles';


export default function Items() {

    const navigate = useNavigate()

    const handleNavigate = () => navigate("/cart");

    return (
        <Card sx={ orderItemsContainerStyles }>
            <CardContent>
                <Typography sx={ orderItemsTitleStyles } fontWeight="fontWeightBold">
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