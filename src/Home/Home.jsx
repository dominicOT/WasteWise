import React from 'react';
import home from "../assets/home-avatar.jpeg"
import './Home.css';

const Home = () => {
  return (
    <div className="profile-container">
      {/* Header */}
      <div className="header">
        <div className="profile-info">
          <div className="avatar">
            <img src={home} alt="Avatar" /> 
          </div>
          <div className="user-details">
            <span className="user-name">User Name</span>
            {/* Add more user details if needed */}
          </div>
        </div>
        <div className="header-icons">
          <div className="info-icon">
            {/* Replace with info icon SVG or image */}
            <img src="info-icon.png" alt="Info" /> 
          </div>
          <div className="notification-icon">
            {/* Replace with notification icon SVG or image */}
            <img src="notification-icon.png" alt="Notifications" /> 
            <span className="notification-badge">2</span> {/* Notification count */}
          </div>
        </div>
      </div>

      {/* Points Section */}
      <div className="points-section">
        <span className="points-label">0</span>
        <span className="points-text">Points</span>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button className="take-photo-button">
          <img src="camera-icon.png" alt="Camera" className="button-icon" />
          Take photo of waste
        </button>
      </div>

      {/* Uploaded Photo Section */}
      <div className="uploaded-photo-section">
        <div className="photo-placeholder">
          <img src="upload-icon.png" alt="Upload" className="upload-icon" />
          uploaded photo
        </div>
      </div>
    </div>
  );
};

export default Home;