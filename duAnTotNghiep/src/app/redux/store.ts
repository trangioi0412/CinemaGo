import { configureStore } from "@reduxjs/toolkit";
import filmSlice from "./slices/filmSlice";
import searchSlice from "./slices/searchSlice";
const store = configureStore({
  reducer: {
    filmCrud: filmSlice,
    search: searchSlice,
  },
});
export default store;
