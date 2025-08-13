import React from "react";
import { logoutUserThunk } from "../../redux/slices/userAuthSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../routes/authContext.jsx";
import Button from "../../components/buttons.jsx";
import PATHS from "../../routes/path.js";
import AdminDashboard from "./adminDashboard/adminDashboard.jsx";
import CustomerDashboard from "./customerDashboard/customerDashboard.jsx";

const Dashboard = () => {
  const { loading } = useAuth();
  const userLogged = useSelector((state) => state.userAuth?.user);
  const role = userLogged?.user_role;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(userLogged);

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
          <h1>Hi {userLogged.user_fname}</h1>
          <CustomerDashboard />
        </>
      ) : role === "admin" ? (
        <>
          <h1>Hi Admin {userLogged.user_fname}</h1>
          <AdminDashboard />
        </>
      ) : (
        <h1>Please Login</h1>
      )}
      <Button btnText="logout" onClickHandler={handleLogout} />
    </div>
  );
};

export default Dashboard;
