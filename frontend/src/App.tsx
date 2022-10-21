import React from "react";
import PrimarySearchAppBar from "./components/navbar/Header";
import DisplayProducts from "./components/display-products/DisplayProducts";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
import DisplayProduct from "./components/display-product/DisplayProduct";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <PrimarySearchAppBar />
        <Routes>
          <Route path="/" element={ <DisplayProducts /> } />
          <Route path="/product/label/:label" element={ <DisplayProduct /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
