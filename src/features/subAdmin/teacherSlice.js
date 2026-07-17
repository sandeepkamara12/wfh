import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosinstance";

const getTeacherUrl = `${import.meta.env.VITE_API_BASE_URL}/sub-admin/all-teachers`;

export const getTeacherThunk = createAsyncThunk(
  "teacher/getTeacher",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(getTeacherUrl);
      return response.data;
    } catch (error) {
      return rejectWithValue({
        status: error?.response?.status,
        message: error?.response?.data?.message || "Failed to get teachers",
      });
    }
  },
);

const teacherSlice = createSlice({
  name: "teachers",
  initialState: {
    status: "",
    loading: { teacher: false },
    error: {
      teacher: null,
    },
    message: "",
    teachers: [],
  },
  extraReducers:(builder)=>{
     builder
      .addCase(getTeacherThunk.pending, (state) => {
        state.loading.teacher = true;
        state.error.teacher = null;
      })
      .addCase(getTeacherThunk.fulfilled, (state, action) => {
        state.loading.teacher = false;
        state.message = action.payload?.message;
        state.teachers = action.payload.data;
      })
      .addCase(getTeacherThunk.rejected, (state, action) => {
        state.loading.teacher = false;
        state.error.teacher = action.payload?.message || "Something went wrong";
        state.status = action.payload?.status || 500;
      });
  }
});

// export const {  } = teacherSlice.actions;
export default teacherSlice.reducer;