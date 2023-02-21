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
import { Dashboard } from "./pages/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Dashboard />} />,
    <Route path="/dashboard" element={<Dashboard />} />,
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
