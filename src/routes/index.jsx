import React from "react";
import { Route, Routes } from "react-router-dom";
import PATHS from "./path.js";
import ProtectedRoute from "./protectedRoutes.jsx";

import Home from "../pages/Home/index.jsx";
import SignUp from "../pages/SignUp/index.jsx";
import Dashboard from "../pages/Dashboard/index.jsx";
import Products from "../pages/Products/index.jsx";
import ProductDetail from "../pages/Products/ProductDetail/productDetail.jsx";

const Router = () => {
  return (
    <Routes>
      <Route path={PATHS.HOME} element={<Home />} />
      <Route path={PATHS.AUTH}>
        <Route exact path={PATHS.SIGNUP} element={<SignUp />} />
        <Route exact path={PATHS.LOGIN} element={<SignUp />} />
        <Route exact path={PATHS.FORGOTPASSWORD} element={<SignUp />} />
      </Route>
      <Route
        path={PATHS.DASHBOARD}
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path={PATHS.PRODUCTS}
        element={
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        }
      />
      <Route
        path={PATHS.PRODUCTDETAILS}
        element={
          <ProtectedRoute>
            <ProductDetail />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Router;
