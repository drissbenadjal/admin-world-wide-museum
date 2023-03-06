import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import { AuthContextProvider } from "./Context/AuthContext";

//PAGES
import { Dashboard } from "./pages/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Dashboard />} />,
    <Route path="/dashboard" element={<Dashboard />} />,
    <Route path="/dashboard/reservations" element={<Dashboard page="reservations" />} />,
    <Route path="/dashboard/statistiques" element={<Dashboard page="statistiques" />} />,
    <Route path="*" element={<Dashboard page="notfound" />} />,
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
