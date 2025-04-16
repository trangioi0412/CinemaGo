import { createSelector } from "@reduxjs/toolkit";
import { Movies } from "../movie.interface";
const filmSelector = (state: any) => state.filmCrud;

const userSelector = (state: any) => state.userCrud;
const voucherSelector = (state: any) => state.voucherCrud;
const searchSelector = (state: any) => state.search;
const cineSelector = (state: any) => state.cineCrud;
const dataRemaining = createSelector(
  filmSelector,
  searchSelector,
  (filmData, searchText) => {
    return filmData.filter((i: Movies) =>
      i.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }
);
export {
  filmSelector,
  userSelector,
  voucherSelector,
  cineSelector,
  dataRemaining,
};
