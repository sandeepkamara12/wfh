import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { teachersData } from "../../const/constant";
import axiosInstance from "../../axiosinstance";



const teachersSlice = createSlice({
  name: "teacher",
  initialState: teachersData,
  reducers: {
    addTeacher(state, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      });
    },
  },
});
export const { addTeacher } = teachersSlice.actions;
export default teachersSlice.reducer;
