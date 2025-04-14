import { configureStore } from "@reduxjs/toolkit";
import filmSlice from "./slices/filmSlice";
import userSlice from  "./slices/userSlice"
import searchSlice from "./slices/searchSlice";
const store = configureStore({
  reducer: {
    filmCrud: filmSlice,
    userCrud: userSlice,
    search: searchSlice,
  },
});
export default store;
