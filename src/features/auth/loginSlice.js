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
const loginSlice = createSlice({
  name: "login",
  initialState: {
    status: "",
    loading: false,
    error: null,
    teacher:{},
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
        const teacher = {
          id:action.payload.id,
          email:action.payload.email,
          phone:action.payload.phone,
          first_name:action.payload.first_name,
          last_name:action.payload.last_name,
          father_name:action.payload.father_name,
          mother_name:action.payload.mother_name,
          spouse_name:action.payload.spouse_name,
          profile_pic:action.payload.profile_pic,
          dob:action.payload.dob,
          gender:action.payload.gender,
          married:action.payload.married,
          role:action.payload.role,
          jwtToken:action.payload.jwtToken,
        };
        state.teacher = teacher;
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
