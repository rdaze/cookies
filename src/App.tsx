import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Group1 from "./pages/Group1";
import Group2 from "./pages/Group2";
import Group3 from "./pages/Group3";
import Group4 from "./pages/Group4";
import UserInteractionsTable from "./pages/UserInteractionsTable";

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/group1" element={<Group1 />} />
      <Route path="/group2" element={<Group2 />} />
      <Route path="/group3" element={<Group3 />} />
      <Route path="/group4" element={<Group4 />} />
      <Route path="/results" element={<UserInteractionsTable />} />
    </Routes>
  </Router>
);

export default App;
