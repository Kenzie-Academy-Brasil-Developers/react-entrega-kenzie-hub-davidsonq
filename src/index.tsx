import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "animate.css";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
