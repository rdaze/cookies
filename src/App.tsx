import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SimplePage from "./pages/SimplePage";
import FearPage from "./pages/FearPage";
import TimerPage from "./pages/TimePage";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SimplePage />} />
      <Route path="/two" element={<FearPage />} />
      <Route path="/three" element={<TimerPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
