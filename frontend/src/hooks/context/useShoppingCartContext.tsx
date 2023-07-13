import { useContext } from 'react'
import { ShoppingCartContext } from '../../contexts/shopping-cart-context'

const useShoppingCartContext = () => {
    const { shoppingCartItems, setShoppingCartItems } = useContext(ShoppingCartContext)

    return { shoppingCartItems, setShoppingCartItems }
}

export default useShoppingCartContext