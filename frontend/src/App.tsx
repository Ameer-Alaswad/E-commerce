import React from 'react';
import PrimarySearchAppBar from './components/navbar/Header';
import DisplayProducts from './components/display-products/DisplayProducts';
import products from "./assets/data"

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import DisplayProduct from './components/display-product/DisplayProduct';

function App() {
  return (
    <div >
      <header >
        <PrimarySearchAppBar />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <DisplayProducts products={ products } /> } />
          <Route path="/product/:id" element={ <DisplayProduct /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
