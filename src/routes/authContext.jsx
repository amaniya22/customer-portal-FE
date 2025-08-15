import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { clearAuth, setAuth } from "../redux/slices/userAuthSlice";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async ({ username, password }) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/auth/login`,
        { username, password },
        { withCredentials: true }
      );

      setUser(res.data.user);
      setAccessToken(res.data.accessToken);

      dispatch(
        setAuth({ user: res.data.user, accessToken: res.data.accessToken })
      );

      return { success: true, role: res.data.user.user_role };
    } catch (err) {
      console.error("Login failed", err);
      return {
        success: false,
        message: err.response?.data?.message || "Login failed",
      };
    }
  };

  const refreshToken = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/auth/refresh-token`,
        {},
        {
          withCredentials: true,
        }
      );

      setUser(res.data.user);
      setAccessToken(res.data.accessToken);

      dispatch(
        setAuth({ user: res.data.user, accessToken: res.data.accessToken })
      );

      return { success: true };
    } catch (err) {
      setUser(null);
      setAccessToken(null);
      dispatch(clearAuth());
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        accessToken,
        login,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
