import { Button, IconButton, Typography } from "@mui/material";
import { useContext } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { ShoppingCartContext } from "../../../../contexts/shopping-cart-context/shoppingCartContext";
import Card from '@mui/material/Card';
import { log } from "console";
import { WidthWideOutlined } from "@mui/icons-material";

export default function ItemsList() {
    const shoppingCartContext = useContext(ShoppingCartContext);
    const { cartItems, setCartItems } = shoppingCartContext;
    const handleProductDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
        const button = event.target as HTMLElement;
        const productName = button?.parentElement?.parentElement?.children[1]?.children[1]?.textContent


        const filterProductsInCart = cartItems?.filter(product => {
            console.log(product.productId, productName);
            return product.productId !== productName
        })

        setCartItems(filterProductsInCart)
    }

    return (
        <>
            { cartItems
                ? cartItems.map((item) => {
                    return <Card sx={ { minWidth: 275, display: "flex", justifyContent: "space-around", alignItems: "center", marginBottom: "10px" } }>
                        <Card>

                            <img style={ { width: "60px", height: "80px" } } src={ item?.image } alt="items-img" />
                        </Card>
                        <Typography>{ item?.productId }</Typography>
                        <Typography>{ item?.quantity }</Typography>
                        <Typography>{ item?.price }$</Typography>
                        { window.location.pathname === "/cart" ?

                            <Button
                                onClick={ handleProductDelete }
                                style={ { marginTop: "10px" } }
                                variant="contained"
                            >
                                Delete
                            </Button>
                            : null }

                    </Card >;
                })
                : null }
        </>
    )

}
