// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import HistoryComp from "./components/HistoryComp";
import Home from "./Pages/Home";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="min-h-screen bg-yellow-400  p-4">
      <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<HistoryComp />} />
    </Routes>
    </div>
  );
}

export default App;
