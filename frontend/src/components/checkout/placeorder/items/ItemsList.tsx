import { Typography } from "@mui/material";
import { useContext } from "react";
import { ShoppingCartContext } from "../../../../contexts/shopping-cart-context/shoppingCartContext";
import Card from '@mui/material/Card';

export default function ItemsList() {
    const shoppingCartContext = useContext(ShoppingCartContext);
    const { cartItems } = shoppingCartContext;
    console.log(cartItems);

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
                    </Card >;
                })
                : null }
        </>
    )

}
