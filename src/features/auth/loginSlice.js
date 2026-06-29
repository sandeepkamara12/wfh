import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosinstance";

const loginUrl = `${import.meta.env.VITE_API_BASE_URL}/auth/login`;
const updateTeacherUrl = `${import.meta.env.VITE_API_BASE_URL}/teacher/profile-update/`;

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

export const updateTeacherThunk = createAsyncThunk(
  "update-teacher",
  async ({ payload }, { rejectWithValue }) => {
    try {
      // console.log(payload, 'data is');
      // for (let [key, value] of payload.entries()) {
      //   console.log(key, value);
      // }
      const response = await axiosInstance.post(
        `${updateTeacherUrl}`,
        payload,
      );
      // console.log(response, "output is");
      return response?.data;
    } catch (error) {
      return rejectWithValue({
        status: error?.response?.status,
        message: error?.response?.data?.message || "Failed to update user",
      });
    }
  },
);

const initialState = {
  status: "",
  loading: { login: false, updateTeacher: false },
  error: { login: null, updateTeacher: null },
  user: {},
  message: "",
};
const loginSlice = createSlice({
  name: "login",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading.login = true;
        state.error.login = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading.login = false;
        state.message = action.payload?.message;
        const user = {
          id: action.payload.id,
          email: action.payload.email,
          phone: action.payload.phone,
          first_name: action.payload.first_name,
          last_name: action.payload.last_name,
          father_name: action.payload?.father_name || "",
          mother_name: action.payload?.mother_name || "",
          spouse_name: action.payload?.spouse_name || "",
          profile_pic: action.payload.profile_pic,
          dob: action.payload.dob,
          gender: action.payload.gender,
          married: !!action.payload?.married,
          role: action.payload.role,
          jwtToken: action.payload.jwtToken,
          custom_id: action.payload.custom_id,
        };
        state.user = user;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading.login = false;
        state.error.login = action.payload?.message || "Something went wrong";
        state.status = action.payload?.status || 500;
      });

    builder
      .addCase(updateTeacherThunk.pending, (state) => {
        state.loading.updateTeacher = true;
        state.error.updateTeacher = null;
      })
      .addCase(updateTeacherThunk.fulfilled, (state, action) => {
        state.loading.updateTeacher = false;
        state.message = action.payload?.message;
        // const user = {
        //   id: action.payload.id,
        //   email: action.payload.email,
        //   phone: action.payload.phone,
        //   first_name: action.payload.first_name,
        //   last_name: action.payload.last_name,
        //   father_name: action.payload?.father_name || "",
        //   mother_name: action.payload?.mother_name || "",
        //   spouse_name: action.payload?.spouse_name || "",
        //   profile_pic: action.payload.profile_pic,
        //   dob: action.payload.dob,
        //   gender: action.payload.gender,
        //   married: !!action.payload?.married,
        //   role: action.payload.role,
        //   jwtToken: action.payload.jwtToken,
        //   custom_id: action.payload.custom_id,
        // };
        // state.user = user;
      })
      .addCase(updateTeacherThunk.rejected, (state, action) => {
        state.loading.updateTeacher = false;
        state.error.updateTeacher =
          action.payload?.message || "Something went wrong";
        state.status = action.payload?.status || 500;
      });
  },
});
export const { getToken } = loginSlice.actions;
export default loginSlice.reducer;
