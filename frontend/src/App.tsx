import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';

import PrimarySearchAppBar from './components/navbar';
import DisplayProducts from './components/display-products';
import DisplayProduct from './components/display-product';
import CartPage from './components/cart-page';
import SignIn from './components/authentication/sign-in';
import ShippingAddressUi from './components/checkout/shipping-address';
import SignUpUser from './components/authentication/sign-up/index';
import PaymentUi from './components/checkout/payment-ui';
import PlaceOrderUi from './components/checkout/place-order';
import OrderScreen from './components/orders/OrderScreen';
import OrdersHistory from './components/orders/order-history';
import ProfileUpdate from './components/ProfileUpdate';
import Footer from './components/footer/Footer';
import { PayPalScriptProvider } from "@paypal/react-paypal-js"

import 'react-toastify/dist/ReactToastify.css';
import ContextProviders from './contexts/ContextProviders';

const reactQueryClient = new QueryClient()

function App() {
  return (
    <div id="app container" style={ { position: 'relative' } } >
      <PayPalScriptProvider options={ { 'client-id': "test" } } >
        <ContextProviders>
          <QueryClientProvider client={ reactQueryClient }>
            <BrowserRouter>
              <ToastContainer position="bottom-center" limit={ 1 } />
              <PrimarySearchAppBar />
              <Routes>
                <Route path="/" element={ <DisplayProducts /> } />
                <Route path="/product/label/:label" element={ <DisplayProduct /> } />
                <Route path="/cart" element={ <CartPage /> } />
                <Route path="/user/signin" element={ <SignIn /> } />
                <Route path="/user/signup" element={ <SignUpUser /> } />
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
        </ContextProviders>
      </PayPalScriptProvider>
    </div>
  );
}
export default App;
