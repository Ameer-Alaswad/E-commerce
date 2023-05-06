import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../contexts/shopping-cart-context/shoppingCartContext';
import { Typography } from '@mui/material';

interface ProductQuantityProps {
    name: string | undefined
}

const ProductQuantity: React.FC<ProductQuantityProps> = ({ name }) => {
    const { cartItems } = useContext(ShoppingCartContext);

    return (
        <div id='quantity'>
            { cartItems.map((item: any) => {
                console.log(item?.productId === name)

                if (item?.productId === name) {
                    return (
                        <Typography sx={ { marginTop: '7px', fontWeight: "bold" } } key={ item.id }>{ item?.quantity } of this product in cart</Typography>
                    );
                }
                return null;
            }) }
        </div>
    )
}

export default ProductQuantity