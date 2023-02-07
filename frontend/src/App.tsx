import React from "react";
import PrimarySearchAppBar from "./components/navbar/Header";
import DisplayProducts from "./components/display-products/DisplayProducts";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
import DisplayProduct from "./components/display-product/DisplayProduct";
import { QueryClientProvider, QueryClient } from "react-query"
import Footer from "./components/footer/Footer";
import { ShoppingCartProvider } from "./contexts/shopping-cart-context/shoppingCartContext";
import CartPage from "./components/cart-page/CartPage";
import SignIn from "./components/authentication/sign-in/SignIn";
import ShippingAddressUi from "./components/checkout/ShippingAddressUi";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import SignUp from "./components/authentication/sign-up/SignUp";
import PaymentUi from "./components/checkout/PaymentUi";
import PlaceOrderUi from "./components/checkout/placeorder";
import OrderScreen from "./components/orders/OrderScreen";
import { Box } from "@mui/material";
import OrdersHistory from "./components/orders/OrdersHistory";
const reactQueryClient = new QueryClient()

function App() {
  return (
    <Box>
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
    </Box>
  );
}
export default App;
