import { productsType } from "../components/display-products/displayProductsInterface"
import { product } from "../contexts/shoppingCartContext"

type props = {
    productName: string
    cartItems: product[]
    setCartItems: (value: product[]) => void
    product: productsType[]
}

export const addToShoppingCartLogic = ({ productName, cartItems, setCartItems, product }: props) => {
    const find = cartItems.every(item => productName !== item.productId)

    if (find) {
        return setCartItems([...cartItems, { productId: String(productName), quantity: 1, productLimit: 6 }])

    }

    return cartItems.forEach((item) => {
        if (item?.productId === productName && item?.productLimit <= 1) {
            return alert("product per purchase limit")

        }

        if (item?.productId === productName && product[0]?.countInStock <= item?.quantity) {

            return alert("error")
        }

        if (item?.productId === productName && product[0]?.countInStock >= item?.quantity) {

            const filteredItem = cartItems.filter(item => {
                if (item?.productId === productName) {
                    item.quantity += 1
                    item.productLimit -= 1
                    return item
                }
                return item
            })
            return setCartItems([...filteredItem])
        }
    })

}