import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const postFeedbackThunk = createAsyncThunk(
  "/feedback/add-feedback",
  async (feedbackData, { rejectWithValue }) => {
    try {
      const res = await api.post("/feedback/add-feedback", feedbackData, {
        withCredentials: true,
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: err.message });
    }
  }
);

const feedbackSlice = createSlice({
  name: "feedback",
  initialState: {
    feedback: [],
    feedbackSelected: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postFeedbackThunk.fulfilled, (state, action) => {
        state.status = "success";
        state.feedback = action.payload.data;
        state.error = null;
      })
      .addCase(postFeedbackThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message || "Failed to post feedback";
      });
  },
});

export default feedbackSlice.reducer;
