import React from "react";
import {Link} from 'react-router-dom';
import logo from '../assets/img/logo.png';

function Navbar() {
  return (
    <nav className="nav">
        <div className= "navbar">
        <img src={logo} alt="Company Logo" className="navbar-logo" style={{ width: "40px", height: "40px", marginRight: "20px" }} />
        <h1 className="topic" style={{ fontSize: "1.2rem", fontWeight: "bold",  marginright: "5px" }}>I Paid For You</h1>
        <ul className="nav-menu">
            <li className="nav-item">
            <a className="nav-link active" href="#">
              HOME</a></li>
            <li className="nav-item">
		        <Link to ="/" className="nav-link">EVENTS</Link></li>
            <li className="nav-item">
		        <Link to ="/add" className="nav-link">ADMIN</Link></li>
            <li className="nav-item">
		        <a className="nav-link" href="#">CONTACT</a></li>
            <li className="nav-item">
		        <a className="nav-link" href="#">LOGIN</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
