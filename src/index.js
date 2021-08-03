import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./App";
import { ContextProvider } from "./Context";

ReactDOM.render(
  <ContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextProvider>,
  document.getElementById("root")
);
