import React from "react";
import { useAuth } from "../../routes/authContext";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div>
      {user && user.user_role === "Customer" ? (
        <h1>
          Hi {user.user_fname} {user.lname}
        </h1>
      ) : user && user.user_role === "Admin" ? (
        <h1>
          Hi Admin {user.user_fname} {user.user_lname}
        </h1>
      ) : (
        <h1>Please Login</h1>
      )}
    </div>
  );
};

export default Dashboard;
