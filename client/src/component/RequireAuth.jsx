import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { userContext } from "../context/userContext";

const RequireAuth = () => {
  const { isLoggedIn } = useContext(userContext);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default RequireAuth;
