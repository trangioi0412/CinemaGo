import { Movies } from "@/app/movie.interface";
import { createSlice } from "@reduxjs/toolkit";
const initialState: string = "";
const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    searchAction: (state, action) => {
      return state.includes(action.payload);
    },
  },
});
export default searchSlice.reducer;
export const { searchAction } = searchSlice.actions;
