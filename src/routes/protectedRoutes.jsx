import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth } from "./authContext";
import PATHS from "./path";

const ProtectedRoute = ({ children, requiredRole }) => {
  const { loading } = useAuth();
  const user = useSelector((state) => state.userAuth?.user);
  const role = user?.user_role;

  console.log(user);

  if (loading) {
    return <h1>Loading ...</h1>
  }

  if (!user) {
    return <Navigate to={PATHS.LOGIN} replace />;
  }

  if (requiredRole && role !== requiredRole) {
    return <Navigate to={PATHS.DASHBOARD} replace />
  }

  return children;
};

export default ProtectedRoute;
