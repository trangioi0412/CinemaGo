import { CineInterface } from "@/app/cine.interface";
import { createSlice } from "@reduxjs/toolkit";
const initialState: CineInterface[] = [];
const cineSlice = createSlice({
  name: "cine",
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
      return state;
    },
  },
});
export default cineSlice.reducer;
export const { getData, addData, deleteData, updateData } = cineSlice.actions;
