import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

//PAGES
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Login />} />,
    <Route path="/dashboard" element={<Dashboard />} />,
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
