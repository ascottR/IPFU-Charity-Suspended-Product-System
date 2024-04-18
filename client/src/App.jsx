import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Pickups from "./pages/smPickups";
import smDashboard from "./pages/smDashboard";
import Settings from "./pages/smSettings";
import InventorySM from "./pages/smInventory";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/ReceiverNavbar";
import ReceiverHomepage from "./pages/ReceiverHomepage";
import ReceiverProfilePage from "./pages/ReceiverProfilePage";
import LoginPage from "./pages/LoginPage";

import TopBar from "./components/Topbar";

import Layout from './components/shared/Layout'
import Dashboard from './pages/Dashboard'
import ManagerDashboard from './pages/ManagerDashboard'

const App = () => {
  return (
    <Router>
      <div className="app">
        <TopBar />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/shopdash" element={<smDashboard />} />
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

            <Route path="/dash" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="manager" element={<ManagerDashboard />} />
                </Route>
          </Routes>
        </main>
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
