import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing/Landing";

const App = () => {
  return (
    <Routes>
      <Route path="" element={<Landing />} />
    </Routes>
  );
};

export default App;