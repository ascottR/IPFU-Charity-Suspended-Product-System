import React from "react";
import NavBar from "../components/smNavbar/Navbar";
import Sidebar from "../components/smSidebar/Sidebar";
import "../assets/css/smSettings-styles.css";

const ShopProfile = () => {
  return (
    <>
      <NavBar />
      <div className="content-section grid sm:grid-cols-12 gap-16">
        <div className="sm:col-span-2">
          <Sidebar />
        </div>
        <div className="shopdetails-section sm:col-span-5">
          <h2>Shop Details</h2>
          <p>Shop Name: </p>
          <p>Location: </p>
          <p>Description: </p>
          <button>Update Shop Details</button>
        </div>
        <div className="Image-section sm:col-span-5">
          <h2>Images</h2>
        </div>
      </div>
    </>
  );
};

export default ShopProfile;
