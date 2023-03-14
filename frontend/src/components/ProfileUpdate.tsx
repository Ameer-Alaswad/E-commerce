import { useContext } from 'react'
import { ShoppingCartContext } from '../contexts/shopping-cart-context/shoppingCartContext';

const ProfileUpdate = () => {
    const shoppingCartContext = useContext(ShoppingCartContext);
    const { userSignin } = shoppingCartContext;
    const user: any = localStorage.getItem("userData");
    const parsedUser = JSON.parse(user);
    let userSigned = userSignin;
    !userSignin ? (userSigned = parsedUser) : (userSigned = userSignin);
    return (
        <div>ProfileUpdate</div>
    )
}

export default ProfileUpdate