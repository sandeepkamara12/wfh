import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosinstance from "../../axiosinstance";
const createClassroomUrl = `${import.meta.env.VITE_API_BASE_URL}/sub-admin/classroom/create`;
const getClassroomUrl = `${import.meta.env.VITE_API_BASE_URL}/sub-admin/classroom`;
const updateClassroomUrl = `${import.meta.env.VITE_API_BASE_URL}/sub-admin/classroom/`;

export const createClassroomThunk = createAsyncThunk(
  "classroom/createClassroom",
  async (payload , { rejectWithValue }) => {
    try {
      const response = await axiosinstance.post(createClassroomUrl, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue({
        status: error?.response?.status,
        message: error?.response?.data?.message || "Failed to create classroom",
      });
    }
  },
);
export const getClassroomThunk = createAsyncThunk(
  "classroom/getClassroom",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosinstance.get(getClassroomUrl);
      return response.data;
    } catch (error) {
      return rejectWithValue({
        status: error?.response?.status,
        message: error?.response?.data?.message || "Failed to get classrooms",
      });
    }
  },
);

export const updateClassroomThunk = createAsyncThunk(
  "classroom/updateClassroom",
  async ({id, data}, { rejectWithValue }) => {
    try {
       const response = await axiosinstance.put(`${updateClassroomUrl}${id}`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue({
        status: error?.response?.status,
        message: error?.response?.data?.message || "Failed to update classroom",
      });
    }
  },
);

export const deleteClassroomThunk = createAsyncThunk(
  "classroom/deleteClassroom",
  async ({id}, { rejectWithValue }) => {
    try {
       const response = await axiosinstance.delete(`${updateClassroomUrl}${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue({
        status: error?.response?.status,
        message: error?.response?.data?.message || "Failed to delete classroom",
      });
    }
  },
);

//  router.put("/sub-admin/classroom/:id");

const classroomSlice = createSlice({
  name: "classrooms",
  initialState: {
    status: "",
    loading: { classroom: false },
    error: {
      classroom: null,
    },
    message: "",
    classrooms:[]
  },
  reducers: {
    deleteClassroom: (state) => {
      state.classrooms = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createClassroomThunk.pending, (state) => {
        state.loading.classroom = true;
        state.error.classroom = null;
      })
      .addCase(createClassroomThunk.fulfilled, (state, action) => {
        state.loading.classroom = false;
        state.message = action.payload?.message;
      })
      .addCase(createClassroomThunk.rejected, (state, action) => {
        state.loading.classroom = false;
        state.error.classroom =
          action.payload?.message || "Something went wrong";
        state.status = action.payload?.status || 500;
      });
    builder
      .addCase(getClassroomThunk.pending, (state) => {
        state.loading.classroom = true;
        state.error.classroom = null;
      })
      .addCase(getClassroomThunk.fulfilled, (state, action) => {
        state.loading.classroom = false;
        state.message = action.payload?.message;
      })
      .addCase(getClassroomThunk.rejected, (state, action) => {
        state.loading.classroom = false;
        state.error.classroom = action.payload?.message || "Something went wrong";
        state.status = action.payload?.status || 500;
      });
    builder
      .addCase(updateClassroomThunk.pending, (state) => {
        state.loading.classroom = true;
        state.error.classroom = null;
      })
      .addCase(updateClassroomThunk.fulfilled, (state, action) => {
        state.loading.classroom = false;
        state.message = action.payload?.message;
      })
      .addCase(updateClassroomThunk.rejected, (state, action) => {
        state.loading.classroom = false;
        state.error.classroom = action.payload?.message || "Something went wrong";
        state.status = action.payload?.status || 500;
      });
    builder
      .addCase(deleteClassroomThunk.pending, (state) => {
        state.loading.classroom = true;
        state.error.classroom = null;
      })
      .addCase(deleteClassroomThunk.fulfilled, (state, action) => {
        state.loading.classroom = false;
        state.message = action.payload?.message;
      })
      .addCase(deleteClassroomThunk.rejected, (state, action) => {
        state.loading.classroom = false;
        state.error.classroom = action.payload?.message || "Something went wrong";
        state.status = action.payload?.status || 500;
      });
  },
});

export const { deleteClassroom } = classroomSlice.actions;
export default classroomSlice.reducer;
