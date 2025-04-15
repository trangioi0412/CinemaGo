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
    updateData: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});
export default filmSlice.reducer;
export const { getData, addData, deleteData, updateData } = filmSlice.actions;
