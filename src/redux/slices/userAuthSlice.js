import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const refreshTokenThunk = createAsyncThunk(
  "/auth/refresh-token",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.post("/auth/refresh-token", {}, {
        withCredentials: true,
      }); //automatically sends cookie
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: err.message });
    }
  }
);

export const loginUserThunk = createAsyncThunk(
  "/auth/login",
  async (loginData, { rejectWithValue }) => {
    try {
      const res = await api.post("/auth/login", loginData, {
        withCredentials: true,
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: err.message });
    }
  }
);

export const registerUserThunk = createAsyncThunk(
  "/auth/register",
  async (registerData, { rejectWithValue }) => {
    try {
      const res = await api.post("/auth/register", registerData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: err.message });
    }
  }
);

export const logoutUserThunk = createAsyncThunk(
  "/auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.post("/auth/logout");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: err.message });
    }
  }
);

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: {
    user: null,
    accessToken: null,
    status: "idle",
    error: null,
  },
  reducers: {
    setAuth: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken || null;
    },
    clearAuth(state) {
      state.user = null;
      state.accessToken = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(refreshTokenThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.status = "success";
        state.error = null;
      })
      .addCase(refreshTokenThunk.rejected, (state) => {
        state.user = null;
        state.accessToken = null;
        state.status = "idle";
        state.error = null;
      })
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.status = "registered";
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
      })
      .addCase(logoutUserThunk.fulfilled, (state) => {
        state.user = null;
        state.accessToken = null;
      });
  },
});

export const { setAuth, clearAuth } = userAuthSlice.actions;
export default userAuthSlice.reducer;
