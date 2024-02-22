import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeColor } from "../features/colorsSlice";
import { NavLink } from "react-router-dom";
import AddColorForm from "./AddColorForm";

const ColorPalette = () => {
  const colors = useSelector((state) => state.colors);
  const dispatch = useDispatch();

  const handleRemoveColor = (color) => {
    dispatch(removeColor(color));
  };

  return (
    <div>
      <NavLink to="/">Timer</NavLink>
      <AddColorForm />

      {colors.map((color) => (
        <div
          key={color}
          style={{ backgroundColor: color, cursor: "pointer", margin: "5px" }}
          onClick={() => handleRemoveColor(color)}
        >
          {color} (Удалить)
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;
