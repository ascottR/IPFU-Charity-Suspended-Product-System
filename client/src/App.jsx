import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pickups from "./pages/smPickups";
import Dashboard from "./pages/smDashboard";
import Settings from "./pages/smSettings";
import InventorySM from "./pages/smInventory";

import Navbar from './components/ReceiverNavbar';
import ReceiverHomepage from './pages/ReceiverHomepage';
import ReceiverProfilePage from './pages/ReceiverProfilePage';
import ReceiverProfile from './components/ReceiverProfile';
import ReceiverEditProfileForm from './components/ReceiverEditProfileForm';
import LoginPage from './pages/LoginPage';
import EditPassword from './components/EditPassword';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar/>
        <main className="main-content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/pickups" element={<Pickups />} />
            <Route path="/inventory" element={<InventorySM />} />

            
        <Route path='/' element={<ReceiverHomepage/>}/>
        <Route path='/receiverprofile' element={<ReceiverProfilePage />}>
            <Route path='myProfile' element={<ReceiverProfile />} />
            <Route path='editProfile' element={<ReceiverEditProfileForm />} />
            <Route path='editPassword' element={<EditPassword/>} />
          </Route>
        <Route path='/login' element={<LoginPage/>}/>
      
          </Routes>
        </main>
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
