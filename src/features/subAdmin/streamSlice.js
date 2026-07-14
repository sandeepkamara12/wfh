import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosinstance from "../../axiosinstance";
const createStreamUrl = `${import.meta.env.VITE_API_BASE_URL}/sub-admin/stream/create`;
const getStreamUrl = `${import.meta.env.VITE_API_BASE_URL}/sub-admin/stream`;
const updateStreamUrl = `${import.meta.env.VITE_API_BASE_URL}/sub-admin/stream/`;

export const createStreamThunk = createAsyncThunk(
  "stream/createStream",
  async (payload , { rejectWithValue }) => {
    try {
      const response = await axiosinstance.post(createStreamUrl, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue({
        status: error?.response?.status,
        message: error?.response?.data?.message || "Failed to create stream",
      });
    }
  },
);
export const getStreamThunk = createAsyncThunk(
  "stream/getStream",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosinstance.get(getStreamUrl);
      return response.data;
    } catch (error) {
      return rejectWithValue({
        status: error?.response?.status,
        message: error?.response?.data?.message || "Failed to get streams",
      });
    }
  },
);

export const updateStreamThunk = createAsyncThunk(
  "stream/updateStream",
  async ({id, data}, { rejectWithValue }) => {
    try {
       const response = await axiosinstance.put(`${updateStreamUrl}${id}`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue({
        status: error?.response?.status,
        message: error?.response?.data?.message || "Failed to update stream",
      });
    }
  },
);

export const deleteStreamThunk = createAsyncThunk(
  "stream/deleteStream",
  async ({id}, { rejectWithValue }) => {
    try {
       const response = await axiosinstance.delete(`${updateStreamUrl}${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue({
        status: error?.response?.status,
        message: error?.response?.data?.message || "Failed to delete tream",
      });
    }
  },
);

//  router.put("/sub-admin/stream/:id");

const streamSlice = createSlice({
  name: "streams",
  initialState: {
    status: "",
    loading: { stream: false },
    error: {
      stream: null,
    },
    message: "",
    streams:[]
  },
  reducers: {
    deleteStream: (state) => {
      state.streams = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createStreamThunk.pending, (state) => {
        state.loading.stream = true;
        state.error.stream = null;
      })
      .addCase(createStreamThunk.fulfilled, (state, action) => {
        state.loading.stream = false;
        state.message = action.payload?.message;
        state.streams.push(action.payload.data);
      })
      .addCase(createStreamThunk.rejected, (state, action) => {
        state.loading.stream = false;
        state.error.stream =
          action.payload?.message || "Something went wrong";
        state.status = action.payload?.status || 500;
      });
    builder
      .addCase(getStreamThunk.pending, (state) => {
        state.loading.stream = true;
        state.error.stream = null;
      })
      .addCase(getStreamThunk.fulfilled, (state, action) => {
        state.loading.stream = false;
        state.message = action.payload?.message;
        state.streams = action.payload.data;
      })
      .addCase(getStreamThunk.rejected, (state, action) => {
        state.loading.stream = false;
        state.error.stream = action.payload?.message || "Something went wrong";
        state.status = action.payload?.status || 500;
      });
    builder
      .addCase(updateStreamThunk.pending, (state) => {
        state.loading.stream = true;
        state.error.stream = null;
      })
      .addCase(updateStreamThunk.fulfilled, (state, action) => {
        state.loading.stream = false;
        state.message = action.payload?.message;
        const updatedStream = action.payload.data;
        // Find index of classroom
        const index = state.streams.findIndex(
          (item) => item.id === updatedStream.id,
        );

        // Replace the old item with updated one
        if (index !== -1) {
          state.streams[index] = updatedStream;
        }
      })
      .addCase(updateStreamThunk.rejected, (state, action) => {
        state.loading.stream = false;
        state.error.stream = action.payload?.message || "Something went wrong";
        state.status = action.payload?.status || 500;
      });
    builder
      .addCase(deleteStreamThunk.pending, (state) => {
        state.loading.stream = true;
        state.error.stream = null;
      })
      .addCase(deleteStreamThunk.fulfilled, (state, action) => {
        state.loading.stream = false;
        state.message = action.payload?.message;
        const deletedId = action.meta.arg.id;

        state.streams = state.streams.filter(
          (item) => item.id !== deletedId,
        );
      })
      .addCase(deleteStreamThunk.rejected, (state, action) => {
        state.loading.stream = false;
        state.error.stream = action.payload?.message || "Something went wrong";
        state.status = action.payload?.status || 500;
      });
  },
});

export const { deleteStream } = streamSlice.actions;
export default streamSlice.reducer;
