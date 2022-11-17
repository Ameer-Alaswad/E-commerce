// Types 
import { productsType } from "../components/display-products/displayProductsInterface"
import { product, userSignin } from "../contexts/shopping-cart-context/shoppingCartContextTypes"

type addToShoppingCartTypes = {
    productName: string
    cartItems: product[]
    setCartItems: (value: product[]) => void
    product: productsType[]
}

export const addToShoppingCartLogic = ({ productName, cartItems, setCartItems, product }: addToShoppingCartTypes) => {
    //    declarations
    const handleProductQuantityLimitations = cartItems.forEach((item) => {

        if (item?.productId === productName && item?.productLimit <= 1) {
            return alert("product per purchase limit")
        }

        if (item?.productId === productName && product[0]?.countInStock <= item?.quantity) {
            return alert("error")
        }

        if (item?.productId === productName && product[0]?.countInStock >= item?.quantity) {
            const changeProductQuantity = cartItems.filter(item => {
                if (item?.productId === productName) {
                    item.quantity += 1
                    item.productLimit -= 1
                    return item
                }
                return item
            })
            return setCartItems([...changeProductQuantity])
        }
        const productIsNotInShoppingCart = cartItems.every(item => productName !== item.productId)
        //  here the logic starts 
        if (productIsNotInShoppingCart) {
            return setCartItems([...cartItems, { productId: String(productName), quantity: 1, productLimit: 6 }])
        }
    })
    return handleProductQuantityLimitations

}

export const checkUserLoggedIn = (userSignin: userSignin | null) => {
    const user: any = localStorage.getItem('userData')
    const parsedUser = JSON.parse(user)
    let userSigned = userSignin
    !userSignin ? userSigned = parsedUser : userSigned = userSignin
    return userSigned
}