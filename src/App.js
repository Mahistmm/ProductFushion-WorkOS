import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Overview from "./pages/overview/Overview";
import Organizations from "./pages/Organizations/Organizations";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/organizations" element={<Organizations />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
