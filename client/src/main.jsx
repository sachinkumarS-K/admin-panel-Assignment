import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./pages/Home.jsx";
import Signup from "./component/Signup.jsx";
import Login from "./component/Login.jsx";
import RequireAuth from "./component/RequireAuth.jsx";
import Certificate from "./pages/Certificate.jsx";
import Dashboard from "./component/Dashboard.jsx";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin-dashboard" element={<Dashboard />} />
      <Route element={<RequireAuth />}>
        <Route path="/certificate" element={<Certificate />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
