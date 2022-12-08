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
const reactQueryClient = new QueryClient()

function App() {
  return (
    <div>
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
              <Route path="/shipping" element={ <ShippingAddressUi /> } />
            </Routes>
            <Footer />
          </BrowserRouter>
        </QueryClientProvider>
      </ShoppingCartProvider>
    </div>
  );
}
export default App;
