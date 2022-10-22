import React from "react";
import PrimarySearchAppBar from "./components/navbar/Header";
import DisplayProducts from "./components/display-products/DisplayProducts";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
import DisplayProduct from "./components/display-product/DisplayProduct";
import { QueryClientProvider, QueryClient } from "react-query"
import Footer from "./components/footer/Footer";
const reactQueryClient = new QueryClient()

function App() {
  return (
    <div>
      <QueryClientProvider client={ reactQueryClient }>
        <BrowserRouter>
          <PrimarySearchAppBar />
          <Routes>
            <Route path="/" element={ <DisplayProducts /> } />
            <Route path="/product/label/:label" element={ <DisplayProduct /> } />
          </Routes>
          <Footer />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
