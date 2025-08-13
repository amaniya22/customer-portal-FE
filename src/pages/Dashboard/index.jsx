import React from "react";
import { useAuth } from "../../routes/authContext.jsx";

const Dashboard = () => {
  const { user, isAdmin, isCustomer, loading } = useAuth();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {isCustomer ? (
        <h1>
          Hi {user.user_fname} {user.lname}
        </h1>
      ) : isAdmin ? (
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
