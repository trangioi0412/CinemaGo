import { createSelector } from "@reduxjs/toolkit";
const filmSelector = (state: any) => state.filmCrud;
const cinemaSelector = (state: any) => state.cineCrud;
export { filmSelector ,cinemaSelector};
