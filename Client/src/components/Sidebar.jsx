// Sidebar.js

import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../assets/css/Sidebar.css";

const Sidebar = () => {
  // Sample sidebar content with corresponding route paths
  const sidebarContent = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Inventory", path: "/inventory" },
    { label: "Pickups", path: "/pickups" },
    { label: "Settings", path: "/settings" },
  ];

  return (
    <aside className="sidebar sm:block hidden">
      <ul className="sidebar-menu">
        {sidebarContent.map((item, index) => (
          <li key={index} className="sidebar-item">
            {/* Use Link component for navigation */}
            <Link to={item.path} className="sidebar-link">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
