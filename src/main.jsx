import React from "react";
import ReactDom from "react-dom/client";

import "react-toastify/dist/inject-style"
import '../src/bootstrapp/material.cyan-light_blue.min.css'
import "./bootstrapp/bootstrap@5.2.0.min.css"
import "./bootstrapp/sb-admin-2.min.css"
import "./App.css"
import "./bootstrapp/animate.compat.css"
import ".//bootstrapp/style.css"

import App from "./App"

import { StateContext } from "./State/StateContext";
import { AuthContext } from "./State/AuthContext";

import { BrowserRouter } from "react-router-dom";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateContext>
      <AuthContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </AuthContext>
    </StateContext>
  </React.StrictMode>
);