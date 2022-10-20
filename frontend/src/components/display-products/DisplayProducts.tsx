import { useNavigate } from 'react-router';
import React from 'react'
// material Ui 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// Types 
import { Props } from "./displayProductsInterface"


const DisplayProducts: React.FC<Props> = ({ products }) => {
    const navigate = useNavigate();
    return (
        <>
            <Typography style={ { textAlign: "center", marginTop: "15px" } } gutterBottom variant="h4" component="div">
                Featured Products
            </Typography>
            <Box style={ { display: "flex", flexWrap: "wrap", justifyContent: "space-around", maxWidth: "1250px", margin: "0 auto", marginTop: "50px" } }>
                { products.map((product) => {
                    const { name, image, price, description, id } = product

                    return (
                        <Card onClick={ () => navigate(`/product/${id}`) } key={ id } sx={ { maxWidth: 500, marginBottom: "20px", width: "400px" } }>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="390"
                                    width="100%"
                                    image={ image }
                                    alt="green iguana"
                                    style={ { objectFit: "contain" } }
                                />
                                <CardContent>
                                    <Typography color="blue" gutterBottom variant="h6" component="div">
                                        { name }
                                    </Typography>

                                    <Typography gutterBottom variant="h5" component="div">
                                        { price }$
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        { description }
                                    </Typography>
                                    <Button style={ { marginTop: "10px" } } variant="contained">Add to cart</Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    );
                }) }
            </Box>
        </>
    )
}

export default DisplayProducts
