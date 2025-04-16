import { configureStore } from "@reduxjs/toolkit";
import filmSlice from "./slices/filmSlice";
import userSlice from  "./slices/userSlice"
import voucherSlice from "./slices/voucherSlice"
import searchSlice from "./slices/searchSlice";
import cineSlice from "./slices/cineSlice";
const store = configureStore({
  reducer: {
    filmCrud: filmSlice,
    userCrud: userSlice,
    voucherCrud: voucherSlice,
    search: searchSlice,
    cineCrud: cineSlice,
  },
});
export default store;



