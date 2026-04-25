import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import { CartProvider } from "./Pages/CartContext";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
      </CartProvider> 
    </React.StrictMode>
)