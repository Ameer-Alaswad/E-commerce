import { AppContextProvider } from "./app-context";
import { ContextChildren } from "./app-context/Types";
import CheckoutContextProvider from "./checkout-context";
import MenuSettingsContextProvider from "./menu-settings-context";
import MenuSettingsMobileContextProvider from "./menu-settings-mobile-context";
import OrdersContextProvider from "./orders-context";
import ShoppingCartContextProvider from "./shopping-cart-context";
import UserAuthContextProvider from "./user-auth-context";


export default function ContextProviders({ children }: ContextChildren) {
    return (
        <MenuSettingsContextProvider>
            <MenuSettingsMobileContextProvider>
                <AppContextProvider>
                    <ShoppingCartContextProvider>
                        <CheckoutContextProvider>
                            <UserAuthContextProvider>
                                <OrdersContextProvider>
                                    { children }
                                </OrdersContextProvider>
                            </UserAuthContextProvider>
                        </CheckoutContextProvider>
                    </ShoppingCartContextProvider>
                </AppContextProvider>
            </MenuSettingsMobileContextProvider>
        </MenuSettingsContextProvider>
    );
}