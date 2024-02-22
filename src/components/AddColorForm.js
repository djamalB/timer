import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addColor } from "../features/colorsSlice";

const AddColorForm = () => {
  const [newColor, setNewColor] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addColor(newColor));
    setNewColor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="color"
        value={newColor}
        onChange={(e) => setNewColor(e.target.value)}
      />
      <button type="submit">Добавить цвет</button>
    </form>
  );
};

export default AddColorForm;
