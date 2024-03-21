import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inventory from "./pages/Inventory";
import Pickups from "./pages/Pickups";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <Router>
      <div className="app">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/pickups" element={<Pickups />} />
            <Route path="/inventory" element={<Inventory />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
