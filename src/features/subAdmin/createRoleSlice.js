import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosinstance from "../../axiosinstance";
const createRoleUrl = `${import.meta.env.VITE_API_BASE_URL}/auth/signup`;
const assignRoleUrl = `${import.meta.env.VITE_API_BASE_URL}/sub-admin/assign-class-teacher`;

export const createRoleThunk = createAsyncThunk(
  "role/createRole",
  async (payload , { rejectWithValue }) => {
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
export const assignRoleThunk = createAsyncThunk(
    "role/assignRole",
    async (payload, { rejectWithValue }) => {
        try {
            console.log(payload, "payload");

            const response = await axiosinstance.post(
                assignRoleUrl,
                payload,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log(response, "res");

            return response.data;
        } catch (error) {
            return rejectWithValue({
                status: error?.response?.status,
                message:
                    error?.response?.data?.message ||
                    "Failed to assign role",
            });
        }
    }
);

const createRoleSlice = createSlice({
  name: "createRole",
  initialState: {
    status: "",
    loading: { createRole: false, assignRole:false },
    error: {
      createRole: null,
      assignRole: null,
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
    builder
      .addCase(assignRoleThunk.pending, (state) => {
        state.loading.assignRole = true;
        state.error.assignRole = null;
      })
      .addCase(assignRoleThunk.fulfilled, (state, action) => {
        state.loading.assignRole = false;
        state.message = action.payload?.message;
      })
      .addCase(assignRoleThunk.rejected, (state, action) => {
        state.loading.assignRole = false;
        state.error.assignRole =
          action.payload?.message || "Something went wrong";
        state.status = action.payload?.status || 500;
      });
  },
});

export const { deleteRole } = createRoleSlice.actions;
export default createRoleSlice.reducer;
