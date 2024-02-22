import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import ColorPalette from "./components/ColorPalette";
import Timer from "./components/Timer";
import './index.css'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Timer />} />
          <Route path="/palette" element={<ColorPalette />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
