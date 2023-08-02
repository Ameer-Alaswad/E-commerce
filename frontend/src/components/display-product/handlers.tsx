import { fetchProducts } from "../../fetchers/fetchProducts";
import { addToShoppingCartLogic } from "../../utils/utils";
import { productsType } from "../display-products/displayProductsInterface";

interface HandleToCart {
    event: React.MouseEvent<HTMLButtonElement>
    data: productsType[] | undefined;
    shoppingCartItems: any[];
    setShoppingCartItems: React.Dispatch<React.SetStateAction<any[]>>;
}

export const handleToCart = ({ event, data, shoppingCartItems, setShoppingCartItems }: HandleToCart) => {
    event.stopPropagation();
    if (data) {
        const productName = data[0]?.name

        if (productName) {
            fetchProducts(`/api/product/name/${productName}`).then(
                (product: productsType[]) => {
                    addToShoppingCartLogic({
                        productName,
                        shoppingCartItems,
                        setShoppingCartItems,
                        product,
                    });
                }
            );
        }
    }

}