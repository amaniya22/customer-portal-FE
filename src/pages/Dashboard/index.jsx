import React from "react";
import { logoutUserThunk } from "../../redux/slices/userAuthSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../routes/authContext.jsx";
import Button from "../../components/buttons.jsx";
import PATHS from "../../routes/path.js";
import AdminDashboard from "./adminDashboard/adminDashboard.jsx";
import CustomerDashboard from "./customerDashboard/customerDashboard.jsx";

const Dashboard = () => {
  const { loading } = useAuth();
  const user = useSelector((state) => state.userAuth?.user);
  const role = user?.user_role;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleLogout = async () => {
    try {
      const res = await dispatch(logoutUserThunk());
      if (res.type?.endsWith("/fulfilled")) {
        navigate(PATHS.HOME);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {role === "customer" ? (
        <>
          <h1>Hi {user.user_fname}</h1>
          <CustomerDashboard />
        </>
      ) : role === "admin" ? (
        <>
          <h1>Hi Admin {user.user_fname}</h1>
          <AdminDashboard />
        </>
      ) : (
        <h1>Please Login</h1>
      )}
      <div>
        <Link to={PATHS.PRODUCTS}>
          <p>Check Products</p>
        </Link>
      </div>
      <Button btnText="logout" onClickHandler={handleLogout} />
    </div>
  );
};

export default Dashboard;
