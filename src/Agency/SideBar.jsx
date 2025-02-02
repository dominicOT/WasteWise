import React from "react";
import { Bell, Settings, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import "./SideBar.css";
import anwarr from "../assets/home-avatar.jpeg";

const SideBar = () => {
  const sendNotification = async () => {
    const accountSid = '';
    const authToken = '';

    try {
      const response = await fetch('/send-sms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          accountSid: accountSid,
          authToken: authToken,
          to: '+23278509549',
          // to: '+23279343497',
          body: 'Waste pickup will patrol today! Please properly pack your waste and bring them outside.',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json(); // Try to parse error response
        throw new Error(`Error sending SMS: ${response.status} - ${errorData?.message || response.statusText}`);
      }

      const data = await response.json();
      console.log("SMS sent successfully:", data);
      alert("Notification sent!"); // Or a more user-friendly notification

    } catch (error) {
      console.error(error);
      alert("Failed to send notification. Please try again later."); // User-friendly error message
    }
  };

  return (
    <div className="sidebar">
      <div className="profile">
        <img src={anwarr} alt="Profile" className="profile-img" />
      </div>

      <div className="menu">
        <div className="menu-item" onClick={sendNotification} style={{cursor: 'pointer'}}>
          <Bell size={32} />
        </div>
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