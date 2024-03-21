import React from "react";
import "../assets/css/NavBar.css"; // Import the CSS file for styling

const NavBar = () => {
  return (
    <nav className="navbar sm:flex hidden items-center justify-between">
      <div className="navbar-left flex items-center ">
        <img
          src="https://via.placeholder.com/150"
          alt="Company Logo"
          className="navbar-logo  "
        />
        <h1 className="navbar-company-name ">I Paid For You </h1>
      </div>
      <div className="navbar-right flex items-center">
        <div className="navbar-icon">
          <img src="../assets/img/noti_icon_sm" alt="Notification bell icon" />
        </div>
        <div className="navbar-icon">
          <img src="../assets/img/profilepic_sm.png" alt="Profile Picture" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
