import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { myApi } from "./redux/api.js";

import { ClerkProvider } from "@clerk/clerk-react";

// Import  publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <ApiProvider api={myApi}>
        <App />
      </ApiProvider>
    </ClerkProvider>
  </React.StrictMode>
);
