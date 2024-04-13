import React from "react";
import NavBar from "../components/smNavbar/Navbar";
import Sidebar from "../components/smSidebar/Sidebar";

const Pickups = () => {
  return (
    <div>
      <>
        <NavBar />
        <div className="content-section grid sm:grid-cols-12 gap-16">
          <div className="sm:col-span-2">
            <Sidebar />
          </div>
          <div className="inventory-section sm:col-span-10">
            <div className="inventory-wrapper flex items-center justify-between">
              <h2>Pickups</h2>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Pickups;
