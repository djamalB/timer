import { createSlice } from "@reduxjs/toolkit";

const colorsSlice = createSlice({
  name: "colors",
  initialState: [],
  reducers: {
    addColor: (state, action) => {
      state.push(action.payload);
    },
    removeColor: (state, action) => {
      return state.filter((color) => color !== action.payload);
    },
  },
});

export const { addColor, removeColor } = colorsSlice.actions;

export default colorsSlice.reducer;
