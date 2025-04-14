import { configureStore } from "@reduxjs/toolkit";
import filmSlice from "./slices/filmSlice";
import cineSlice from "./slices/cineSlice";
import searchSlice from "./slices/searchSlice";
const store = configureStore({
  reducer: {
    filmCrud: filmSlice,
    cineCrud: cineSlice,
    // search: searchSlice,
  },
});
export default store;
