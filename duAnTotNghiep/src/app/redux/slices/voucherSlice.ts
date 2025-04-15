import { Vouchers } from "@/app/voucher.interface"; 
import { createSlice } from "@reduxjs/toolkit";
const initialState: Vouchers[] = [];
const voucherSlice = createSlice({
  name: "vouchers",
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
export default voucherSlice.reducer;
export const { getData, addData, deleteData } = voucherSlice.actions;
