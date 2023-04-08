// React 
import React from 'react'
import { useNavigate } from "react-router";
// Types 
import { productProps } from "./displayProductsInterface"
// Material Ui
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
// Components 
import RatingComponent from "./Rating";
import AddToCartButton from '../AddToCartButton';

const Products: React.FC<productProps> = ({ data }) => {
    console.log(data);

    const navigate = useNavigate();
    return (

        <Box style={ { height: "100vh" } }>
            <Typography
                style={ { textAlign: "center", marginTop: "90px" } }
                gutterBottom
                variant="h4"
                component="div"
            >
                Featured Products
            </Typography>
            <Box
                style={ {
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    maxWidth: "1250px",
                    margin: "0 auto",
                    marginTop: "50px",
                } }
            >
                { data ? data?.map((product) => {

                    const { name, image, price, description, label, numReviews, rating } = product;

                    return (
                        <Card
                            onClick={ () => navigate(`/product/label/${label}`) }
                            key={ label }
                            sx={ { maxWidth: 500, marginBottom: "20px", width: "400px" } }
                        >
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
                                    <Typography
                                        color="blue"
                                        gutterBottom
                                        variant="h6"
                                        component="div"
                                    >
                                        { name }
                                    </Typography>

                                    <Typography gutterBottom variant="h5" component="div">
                                        { price }$
                                    </Typography>
                                    <RatingComponent numReviews={ numReviews } rating={ rating } />
                                    <Typography variant="body2" color="text.secondary">
                                        { description }
                                    </Typography>
                                    <AddToCartButton />
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    );
                }) : null }
            </Box>
        </Box>


    )
}

export default Products