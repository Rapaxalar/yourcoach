import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const { containerId } = window.YourCoachInit;

const root = ReactDOM.createRoot(document.getElementById(containerId));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
