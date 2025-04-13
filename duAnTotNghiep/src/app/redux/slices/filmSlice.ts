import { Movies } from "@/app/movie.interface";
import { createSlice } from "@reduxjs/toolkit";
const initialState: Movies[] = [];
const filmSlice = createSlice({
  name: "film",
  initialState: initialState,
  reducers: {
    getData: (state, action) => {
      return action.payload;
    },
    addData: (state, action) => {
      state.push(action.payload);
    },
    deleteData: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});
export default filmSlice.reducer;
export const { getData, addData, deleteData } = filmSlice.actions;
