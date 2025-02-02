import React from "react";
import { Settings, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import "./SideBar.css";
import anwarr from "../assets/home-avatar.jpeg";
const SideBar = () => {
  return (
    <div className="sidebar">
      {/* Profile Section */}
      <div className="profile">
        <img src={anwarr} alt="Profile" className="profile-img" />
      </div>

      {/* Menu Items */}
      <div className="menu">
        <Link to={'/admin/settings'} className="menu-item">
          <Settings size={32} />
        </Link>
        <Link to={'/admin-login'} className="menu-item">
          <LogOut size={32} />
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
