import { configureStore } from "@reduxjs/toolkit";
import colorsReducer from "../features/colorsSlice"

export const store = configureStore({
  reducer: {
    colors: colorsReducer,
  },
});
