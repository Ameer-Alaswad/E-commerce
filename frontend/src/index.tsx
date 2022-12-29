import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PayPalScriptProvider } from "@paypal/react-paypal-js"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <PayPalScriptProvider options={ { 'client-id': "test" } } >
    <App />
  </PayPalScriptProvider>
);

