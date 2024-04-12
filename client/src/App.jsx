import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pickups from "./pages/smPickups";
import Dashboard from "./pages/smDashboard";
import Settings from "./pages/smSettings";
import InventorySM from "./pages/smInventory";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
            <Route path="/inventory" element={<InventorySM />} />
          </Routes>
        </main>
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
