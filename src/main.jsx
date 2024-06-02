import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";

import "./index.css";

import { router } from "./routes/router";
import {
  PersonalContext,
  PersonalProvider,
  PersonalState,
} from "./context/PersonalProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}

    <PersonalProvider>
      <RouterProvider router={router} />
    </PersonalProvider>
  </React.StrictMode>
);
