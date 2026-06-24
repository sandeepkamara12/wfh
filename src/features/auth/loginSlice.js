import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosinstance";

const loginUrl = `${import.meta.env.VITE_API_BASE_URL}/auth/login`;

export const loginThunk = createAsyncThunk(
  "login",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(loginUrl, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue({
        status: error?.response?.status,
        message: error?.response?.data?.message || "Failed to create role",
      });
    }
  },
);
console.log(`hello testing.  + ${import.meta.env.VITE_API_BASE_URL}`)
const loginSlice = createSlice({
  name: "login",
  initialState: {
    status: "",
    loading: false,
    error: null,
    message: "",
  },
  reducers: {
    setToken: (state, action) => {
      localStorage.setItem("jwtToken", JSON.stringify(action.payload));
    },
    removeToken: () => {
      localStorage.removeItem("jwtToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload?.message;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Something went wrong";
        state.status = action.payload?.status || 500;
      });
  },
});
export const { setToken, getToken, removeToken } = loginSlice.actions;
export default loginSlice.reducer;
