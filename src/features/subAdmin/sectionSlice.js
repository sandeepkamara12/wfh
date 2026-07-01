import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosinstance from "../../axiosinstance";
const createSectionUrl = `${import.meta.env.VITE_API_BASE_URL}/sub-admin/section/create`;
const getSectionUrl = `${import.meta.env.VITE_API_BASE_URL}/sub-admin/section`;
const updateSectionUrl = `${import.meta.env.VITE_API_BASE_URL}/sub-admin/section/`;

export const createSectionThunk = createAsyncThunk(
  "section/createSection",
  async (payload , { rejectWithValue }) => {
    try {
      const response = await axiosinstance.post(createSectionUrl, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue({
        status: error?.response?.status,
        message: error?.response?.data?.message || "Failed to create section",
      });
    }
  },
);
export const getSectionThunk = createAsyncThunk(
  "section/getSection",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosinstance.get(getSectionUrl);
      return response.data;
    } catch (error) {
      return rejectWithValue({
        status: error?.response?.status,
        message: error?.response?.data?.message || "Failed to get sections",
      });
    }
  },
);

export const updateSectionThunk = createAsyncThunk(
  "section/updateSection",
  async ({id, data}, { rejectWithValue }) => {
    try {
       const response = await axiosinstance.put(`${updateSectionUrl}${id}`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue({
        status: error?.response?.status,
        message: error?.response?.data?.message || "Failed to update section",
      });
    }
  },
);

export const deleteSectionThunk = createAsyncThunk(
  "section/deleteSection",
  async ({id}, { rejectWithValue }) => {
    try {
       const response = await axiosinstance.delete(`${updateSectionUrl}${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue({
        status: error?.response?.status,
        message: error?.response?.data?.message || "Failed to delete section",
      });
    }
  },
);

//  router.put("/sub-admin/section/:id");

const sectionSlice = createSlice({
  name: "sections",
  initialState: {
    status: "",
    loading: { section: false },
    error: {
      section: null,
    },
    message: "",
    sections:[]
  },
  reducers: {
    deleteSection: (state) => {
      state.sections = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createSectionThunk.pending, (state) => {
        state.loading.section = true;
        state.error.section = null;
      })
      .addCase(createSectionThunk.fulfilled, (state, action) => {
        state.loading.section = false;
        state.message = action.payload?.message;
      })
      .addCase(createSectionThunk.rejected, (state, action) => {
        state.loading.section = false;
        state.error.section =
          action.payload?.message || "Something went wrong";
        state.status = action.payload?.status || 500;
      });
    builder
      .addCase(getSectionThunk.pending, (state) => {
        state.loading.section = true;
        state.error.section = null;
      })
      .addCase(getSectionThunk.fulfilled, (state, action) => {
        state.loading.section = false;
        state.message = action.payload?.message;
      })
      .addCase(getSectionThunk.rejected, (state, action) => {
        state.loading.section = false;
        state.error.section = action.payload?.message || "Something went wrong";
        state.status = action.payload?.status || 500;
      });
    builder
      .addCase(updateSectionThunk.pending, (state) => {
        state.loading.section = true;
        state.error.section = null;
      })
      .addCase(updateSectionThunk.fulfilled, (state, action) => {
        state.loading.section = false;
        state.message = action.payload?.message;
      })
      .addCase(updateSectionThunk.rejected, (state, action) => {
        state.loading.section = false;
        state.error.section = action.payload?.message || "Something went wrong";
        state.status = action.payload?.status || 500;
      });
    builder
      .addCase(deleteSectionThunk.pending, (state) => {
        state.loading.section = true;
        state.error.section = null;
      })
      .addCase(deleteSectionThunk.fulfilled, (state, action) => {
        state.loading.section = false;
        state.message = action.payload?.message;
      })
      .addCase(deleteSectionThunk.rejected, (state, action) => {
        state.loading.section = false;
        state.error.section = action.payload?.message || "Something went wrong";
        state.status = action.payload?.status || 500;
      });
  },
});

export const { deleteSection } = sectionSlice.actions;
export default sectionSlice.reducer;
