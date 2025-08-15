import axios from "axios";
import store from "../redux/store";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, 
  // setting this as true allow to send and receive cookies include httpOnly cookie on same-origin requests
});

api.interceptors.request.use((config) => {
  const state = store.getState();
  const token = state?.userAuth?.accessToken;
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default api;
