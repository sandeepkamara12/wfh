import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosinstance";

const getStudentUrl = `${import.meta.env.VITE_API_BASE_URL}/sub-admin/all-teachers`;

export const getStudentThunk = createAsyncThunk(
  "student/getStudent",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(getStudentUrl);
      return response.data;
    } catch (error) {
      return rejectWithValue({
        status: error?.response?.status,
        message: error?.response?.data?.message || "Failed to get students",
      });
    }
  },
);

const studentSlice = createSlice({
  name: "students",
  initialState: {
    status: "",
    loading: { student: false },
    error: {
      student: null,
    },
    message: "",
    students: [],
  },
  extraReducers:(builder)=>{
     builder
      .addCase(getStudentThunk.pending, (state) => {
        state.loading.student = true;
        state.error.student = null;
      })
      .addCase(getStudentThunk.fulfilled, (state, action) => {
        state.loading.student = false;
        state.message = action.payload?.message;
        state.students = action.payload.data;
      })
      .addCase(getStudentThunk.rejected, (state, action) => {
        state.loading.student = false;
        state.error.student = action.payload?.message || "Something went wrong";
        state.status = action.payload?.status || 500;
      });
  }
});

// export const {  } = studentSlice.actions;
export default studentSlice.reducer;