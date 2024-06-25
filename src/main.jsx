import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./context/store";
import { BasketProvider } from "./context/BasketPage";
import { LikeProvider } from "./context/likeContext";
import { AuthProvider } from "./context/AuthContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <ProductProvider>
        <BasketProvider>
          <LikeProvider>
            <App />
          </LikeProvider>
        </BasketProvider>
      </ProductProvider>
    </AuthProvider>
  </BrowserRouter>
);
