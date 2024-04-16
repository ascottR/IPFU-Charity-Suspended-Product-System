import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Pickups from "./pages/smPickups";
import Dashboard from "./pages/smDashboard";
import Settings from "./pages/smSettings";
import InventorySM from "./pages/smInventory";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/ReceiverNavbar";
import ReceiverHomepage from "./pages/ReceiverHomepage";
import ReceiverProfilePage from "./pages/ReceiverProfilePage";
import LoginPage from "./pages/LoginPage";

import TopBar from "./components/Topbar";

const App = () => {
  return (
    <Router>
      <div className="app">
        <TopBar />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/pickups" element={<Pickups />} />
            <Route path="/inventory" element={<InventorySM />} />

            <Route path="/" element={<ReceiverHomepage />} />
            <Route
              exact
              path="/receiverprofile"
              element={
                <div>
                  <ReceiverProfilePage />
                </div>
              }
            />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
