import React, { useContext } from "react";
import Box from "@mui/material/Box";
import { productsType } from "../display-products/displayProductsInterface";
import { Button, Card, CardContent, Divider, Typography } from "@mui/material";
import RatingComponent from "../display-products/Rating";
import { fetchProducts } from "../../fetchers/fetchProducts";
import { addToShoppingCartLogic } from "../../utils/utils";
import { ShoppingCartContext } from "../../contexts/shopping-cart-context/shoppingCartContext";
interface Props {
    data: productsType[] | undefined;
}
const Product: React.FC<Props> = ({ data }) => {
    const shoppingCartContext = useContext(ShoppingCartContext);
    const { cartItems, setCartItems } = shoppingCartContext;

    const handleToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        if (data) {
            const productName = data[0]?.name

            if (productName) {
                fetchProducts(`/api/product/name/${productName}`).then(
                    (product: productsType[]) => {
                        addToShoppingCartLogic({
                            productName,
                            cartItems,
                            setCartItems,
                            product,
                        });
                    }
                );
            }
        }

    }
    return (
        <Box style={ { marginTop: "80px", height: "100vh" } }>
            { data && data?.length !== 0 && (
                <Box
                    sx={ {
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "flex-start",
                        width: "1200px",
                    } }
                >
                    <img style={ { width: "500px" } } src={ data[0]?.image } alt="product-img" />
                    <Box sx={ { marginLeft: "10px" } }>
                        <Typography
                            sx={ { paddingTop: "10px", paddingBottom: "10px" } }
                            variant="h4"
                        >
                            { data[0]?.name }
                        </Typography>
                        <Divider />
                        <Box sx={ { paddingTop: "10px", paddingBottom: "10px" } }>
                            <RatingComponent
                                numReviews={ data[0]?.numReviews }
                                rating={ data[0]?.rating }
                            />
                        </Box>
                        <Divider />
                        <Typography sx={ { paddingTop: "10px", paddingBottom: "10px" } }>
                            Price ${ data[0]?.price }
                        </Typography>
                        <Divider />
                        <Typography sx={ { paddingTop: "10px", paddingBottom: "10px" } }>
                            Description: { data[0]?.description }
                        </Typography>
                        <Divider />
                    </Box>
                    <Card
                        sx={ {
                            width: "250px",
                            height: "180px",
                        } }
                    >
                        <CardContent>
                            <Box sx={ { marginLeft: "10px" } }>
                                <Typography sx={ { paddingTop: "10px", paddingBottom: "10px" } }>
                                    Price: ${ data[0]?.price }
                                </Typography>
                                <Divider />
                                <Typography sx={ { paddingTop: "10px", paddingBottom: "10px" } }>
                                    Status:{ " " }
                                    { data[0]?.countInStock === 0 ? "Not in Stock" : "In Stock" }
                                </Typography>
                                <Divider />
                            </Box>
                        </CardContent>
                        <Box
                            sx={ {
                                display: "flex",
                                justifyContent: "center",
                            } }
                        >
                            <Button onClick={ handleToCart } sx={ { width: "220px" }
                            } variant="contained">Add to Cart</Button>
                        </Box>
                    </Card>
                </Box>
            ) }
        </Box>
    );
};

export default Product;
