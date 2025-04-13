import { createSelector } from "@reduxjs/toolkit";
import { Movies } from "../movie.interface";
const filmSelector = (state: any) => state.filmCrud;
const searchSelector = (state: any) => state.search;
const dataRemaining = createSelector(
  filmSelector,
  searchSelector,
  (filmData, searchText) => {
    return filmData.filter((i: Movies) =>
      i.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }
);
export { filmSelector, dataRemaining };
