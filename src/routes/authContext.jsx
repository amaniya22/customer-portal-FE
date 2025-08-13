import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accesstoken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async ({ username, password }) => {
    try {
      const res = await axios.post("/auth/login", { username, password });

      setUser(res.data.user);
      setAccessToken(res.data.accesstoken);

      return { success: true };
    } catch (err) {
      console.error("Login failed", err);
      return {
        success: false,
        message: err.response?.data?.message || "Login failed",
      };
    }
  };

  const logout = async () => {
    try {
      await axios.post("/auth/logout");
    } catch (err) {
      console.error("Logout failes", err);
    } finally {
      setUser(null);
      setAccessToken(null);
    }
  };

  const refreshToken = async () => {
    try {
      const res = await axios.post("/api/auth/refresh-token", {
        withCredentials: true,
      });

      setUser(res.data.user);
      setAccessToken(res.data.accesstoken);

      return { success: true };
    } catch (err) {
      console.log(err)
      setUser(null);
      setAccessToken(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshToken();
  }, []);

  const isAdmin = () => user?.role === "admin";
  const isCustomer = () => user?.role === "customer";

  return (
    <AuthContext.Provider
      value={{
        user,
        accesstoken,
        login,
        logout,
        isAdmin,
        isCustomer,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
