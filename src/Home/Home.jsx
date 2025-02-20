import React, { useState } from 'react';
import home from "../assets/home-avatar.jpeg"
import upload from "../assets/cloud-upload.svg"
import './Home.css';

const Home = () => {
    const [previewURL, setPreviewURL] = useState(null);
    const [processing, setProcessing] = useState(false);
    const [analysisResult, setAnalysisResult] = useState(null);
    const [error, setError] = useState(null);

    const handleTakePhoto = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.capture = 'camera';
    
        input.addEventListener('change', async (event) => {
          const file = event.target.files[0];
          if (file) {
            setProcessing(true);
            setAnalysisResult(null);
            setError(null); // Clear any previous errors

            try {
                const reader = new FileReader();
                reader.onload = async (e) => {
                    setPreviewURL(e.target.result);

                    const formData = new FormData();
                    formData.append('image', file);

                    // Get API base URL from environment variable
                    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

                    const response = await fetch(`${apiBaseUrl}/api/analyze`, {
                        method: 'POST',
                        body: formData,
                    });

                    if (!response.ok) {
                        const errorData = await response.json(); // Try to get error details from the server
                        throw new Error(`${response.status} ${response.statusText}: ${errorData.error || 'Image analysis failed'}`);
                    }

                    const data = await response.json();
                    setAnalysisResult(data.result);

                };
    
            reader.readAsDataURL(file);
          }
            catch (err) {
              console.error("Error processing image:", err);
              setError(err.message); // Set the error message to display
          } finally {
              setProcessing(false);
          }
          }
        });
    
        input.click();
      };

      
  return (
    <div className="profile-container">
      {/* Header */}
      <div className="header">
        <div className="profile-info">
          <div className="avatar">
            <img src={home} alt="Avatar" /> 
          </div>
          <div className="user-details">
            <span className="user-name">Anwarr</span>
          </div>
        </div>
        <div className="header-icons">
          <div className="info-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
            </svg>
          </div>
          <div className="notification-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.072-4.9L8 2.018l3.928-.9L14.22 12z"/>
            </svg>
            <span className="notification-badge">2</span>
          </div>
        </div>
      </div>

      <div className="points-section">
        <span className="points-label">0</span>
        <span className="points-text">Points</span>
      </div>

      <div className="action-buttons">
        <button className="take-photo-button" onClick={handleTakePhoto}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16">
        <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v10zM2 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1z"/>
        <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
        <path d="M9 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"/>
        <path d="M8 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
        </svg>
          Take photo of waste
        </button>
      </div>


      <div className="uploaded-photo-section">
            <div className="photo-placeholder">
                {previewURL ? (
                    <img src={previewURL} alt="Preview" className="uploaded-image" />
                ) : (
                    <>
                        <img src={upload} alt="Upload" className="upload-icon" />
                        uploaded photo
                    </>
                )}

                {processing && ( // Conditionally render processing graphic
                    <div className="processing-overlay">
                        <div className="processing-spinner"></div> {/* Or any other graphic */}
                        Processing...
                    </div>
                )}
            </div>

            {/* Display Analysis Result */}
            {analysisResult && (
                <div className="analysis-result">
                    <h2>Analysis Result:</h2>
                    <p>{analysisResult}</p> {/* Display the result from the server */}
                </div>
            )}
        </div>
    </div>
  );
};

export default Home;