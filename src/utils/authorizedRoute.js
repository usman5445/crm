import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const AuthorizedRoute = ({ role }) => {
  const userData = useSelector((state) => state.user.user);
  const userData1 = JSON.parse(localStorage.getItem("userData"));
  console.log(userData);
  const location = useLocation();

  return role === userData1?.userTypes ? (
    <Outlet />
  ) : userData1?.userTypes ? (
    <Navigate to="/unauthorized" replace />
  ) : (
    <Navigate to="/signin" replace />
  );
};
