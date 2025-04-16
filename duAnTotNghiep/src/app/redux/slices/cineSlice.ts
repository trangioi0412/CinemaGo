import { CineInterface } from "@/app/cine.interface";
import { createSlice } from "@reduxjs/toolkit";
const initialState: CineInterface[] = [];
const cineSlice = createSlice({
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
export default cineSlice.reducer;
export const { getData, addData, deleteData } = cineSlice.actions;
