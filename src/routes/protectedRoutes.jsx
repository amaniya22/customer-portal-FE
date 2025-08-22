import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PATHS from "./path";
import { useEffect } from "react";
import { refreshTokenThunk } from "../redux/slices/userAuthSlice";

const ProtectedRoute = ({ children, requiredRole }) => {
  const [triedRefresh, setTriedRefresh] = useState(false);

  const user = useSelector((state) => state.userAuth?.user);
  const status = useSelector((state) => state.userAuth?.status);
  const role = user?.user_role;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!user && !triedRefresh) {
      dispatch(refreshTokenThunk());
      setTriedRefresh(true);
    }
  }, [user, dispatch, triedRefresh]);

  if (status === 'loading' || status === 'idle') {
    return <h1>Loading ...</h1>;
  }

  if (!user) {
    return <Navigate to={PATHS.LOGIN} replace />;
  }

  if (requiredRole && role !== requiredRole) {
    return <Navigate to={PATHS.DASHBOARD} replace />;
  }

  return children;
};

export default ProtectedRoute;
