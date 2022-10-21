import React from "react";
import PrimarySearchAppBar from "./components/navbar/Header";
import DisplayProducts from "./components/display-products/DisplayProducts";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
import DisplayProduct from "./components/display-product/DisplayProduct";

function App() {
  return (
    <div>
      <header>
        <PrimarySearchAppBar />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <DisplayProducts /> } />
          <Route path="/product/:id" element={ <DisplayProduct /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
