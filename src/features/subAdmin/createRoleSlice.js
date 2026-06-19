import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosinstance from "../../axiosinstance";
const createRoleUrl = `${import.meta.env.VITE_API_BASE_URL}/auth/signup`;

export const createRoleThunk = createAsyncThunk(
  "role/createRole",
  async ({ payload }, { rejectWithValue }) => {
    try {
      const response = await axiosinstance.post(createRoleUrl, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue({
        status: error?.response?.status,
        message: error?.response?.data?.message || "Failed to create role",
      });
    }
  },
);

const createRoleSlice = createSlice({
  name: "createRole",
  initialState: {
    status: "",
    loading: { createRole: false },
    error: {
      createRole: null,
    },
    message: "",
  },
  reducers: {
    deleteRole: (state) => {
      state.teachers = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createRoleThunk.pending, (state) => {
        state.loading.createRole = true;
        state.error.createRole = null;
      })
      .addCase(createRoleThunk.fulfilled, (state, action) => {
        state.loading.createRole = false;
        state.message = action.payload?.message;
      })
      .addCase(createRoleThunk.rejected, (state, action) => {
        state.loading.createRole = false;
        state.error.createRole =
          action.payload?.message || "Something went wrong";
        state.status = action.payload?.status || 500;
      });
  },
});

export const { deleteRole } = createRoleSlice.actions;
export default createRoleSlice.reducer;
