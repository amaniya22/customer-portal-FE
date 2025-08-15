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
    <div className="min-h-screen w-full m-w-full w-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Greeting */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            {role === "customer"
              ? `Hi ${user.user_fname}`
              : role === "admin"
              ? `Hi Admin ${user.user_fname}`
              : "Please Login"}
          </h1>
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Feedback Section */}
          <div className="bg-white rounded-xl shadow p-6 col-span-2">
            {/* Feedback list */}
            {role === "customer" && <CustomerDashboard />}
            {role === "customer" && <AdminDashboard />}
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-medium text-gray-700 mb-4">
                Quick Actions
              </h2>
            </div>
            <div className="flex flex-col gap-8">
              <Link to={PATHS.PRODUCTS}>
                <Button
                  btnText="View All Products"
                  className="btn-primary-blue-outline rounded-md text-white w-full text-center justify-center"
                />
              </Link>
              <Button
                  btnText="View All Feedback"
                  className="btn-primary-blue-outline rounded-md text-white w-full text-center justify-center"
                />
              <Button
                btnText="Logout"
                onClickHandler={handleLogout}
                className="btn-primary-blue rounded-md text-white w-full text-center justify-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
