import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const getAllProductsThunk = createAsyncThunk(
  "/products",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/products/", {
        withCredentials: true,
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: err.message });
    }
  }
);

export const getProductById = createAsyncThunk(
  "/products/:id",
  async (id, { rejectWithValue }) => {
    try {
      const res = await api.get(`/products/product/${id}`, { withCredentials: true });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: err.message });
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    productSelected: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProductsThunk.fulfilled, (state, action) => {
        state.products = action.payload.data || [];
        state.status = "success";
      })
      .addCase(getAllProductsThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message || "Failed to fetch products";
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.status = "success";
        state.productSelected = action.payload.data || [];
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message || "Failed to fetch product";
      });
  },
});

export default productSlice.reducer;
