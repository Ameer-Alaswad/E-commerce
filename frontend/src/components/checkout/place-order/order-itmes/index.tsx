import {
    Card,
    CardActions,
    CardContent,
    Button,
} from "@mui/material";

import { useNavigate } from 'react-router-dom';
import ItemsList from './ItemsList';
import { orderItemsContainerStyles } from '../../styles';
import Title from "./Title";


export default function Items() {

    const navigate = useNavigate()

    const handleNavigate = () => navigate("/cart");

    return (
        <Card sx={ orderItemsContainerStyles }>
            <CardContent>
                <Title />
                <ItemsList />
            </CardContent>
            <CardActions>
                <Button onClick={ handleNavigate } size="small">Edit</Button>
            </CardActions>
        </Card>
    );
}