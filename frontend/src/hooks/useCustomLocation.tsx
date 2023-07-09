import { useLocation } from 'react-router-dom';
import { HOME_PATH, SHOPPING_CART_PATH } from '../components/constants/path';

const useCustomLocation = () => {
    const location = useLocation();
    const isHomePage = location.pathname === HOME_PATH;
    const isCartPage = location.pathname === SHOPPING_CART_PATH;

    return {
        isCartPage,
        isHomePage
    }
};

export default useCustomLocation;