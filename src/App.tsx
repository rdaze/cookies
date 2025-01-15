import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import SimplePage from "./pages/SimplePage";
import FearPage from "./pages/FearPage";
import TimerPage from "./pages/TimePage";

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<SimplePage />} />
      <Route path="/two" element={<FearPage />} />
      <Route path="/three" element={<TimerPage />} />
    </Routes>
  </Router>
);

export default App;
