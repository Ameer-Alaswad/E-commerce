import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';

import PrimarySearchAppBar from './components/navbar/Header';
import DisplayProducts from './components/display-products/DisplayProducts';
import DisplayProduct from './components/display-product';
import CartPage from './components/cart-page';
import SignIn from './components/authentication/sign-in';
import ShippingAddressUi from './components/checkout/shopping-address';
import SignUp from './components/authentication/sign-up/index';
import PaymentUi from './components/checkout/PaymentUi';
import PlaceOrderUi from './components/checkout/place-order';
import OrderScreen from './components/orders/OrderScreen';
import OrdersHistory from './components/orders/order-history';
import ProfileUpdate from './components/ProfileUpdate';
import Footer from './components/footer/Footer';
import { ShoppingCartProvider } from './contexts/shopping-cart-context/shoppingCartContext';

import 'react-toastify/dist/ReactToastify.css';

const reactQueryClient = new QueryClient()

function App() {
  return (
    <div id="app container" style={ { position: 'relative' } } >
      <ShoppingCartProvider>
        <QueryClientProvider client={ reactQueryClient }>
          <BrowserRouter>
            <ToastContainer position="bottom-center" limit={ 1 } />
            <PrimarySearchAppBar />
            <Routes>
              <Route path="/" element={ <DisplayProducts /> } />
              <Route path="/product/label/:label" element={ <DisplayProduct /> } />
              <Route path="/cart" element={ <CartPage /> } />
              <Route path="/user/signin" element={ <SignIn /> } />
              <Route path="/user/signup" element={ <SignUp /> } />
              <Route path="/user/update" element={ <ProfileUpdate /> } />
              <Route path="/shipping" element={ <ShippingAddressUi /> } />
              <Route path="/payment" element={ <PaymentUi /> } />
              <Route path="/placeOrder" element={ <PlaceOrderUi /> } />
              <Route path="/order/:id" element={ <OrderScreen /> } />
              <Route path="/ordershistory" element={ <OrdersHistory /> } />
            </Routes>
            <Footer />
          </BrowserRouter>
        </QueryClientProvider>
      </ShoppingCartProvider>
    </div>
  );
}
export default App;
