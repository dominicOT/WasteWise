import { useState, useEffect } from "react";
import splash from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

function SplashScreen() {
  return (
    <div className="splash-container">
      <img src={splash} className="splash-image" alt="WasteWise" />
    </div>
  );
}

function MainApp() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/auth");
  };

  return (
    <div className="main-app-container">
      <div className="start-button-container">
        <button className="start-button" onClick={handleButtonClick}>
          Get Started
        </button>
      </div>
    </div>
  );
}

function Welcome() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return showSplash ? <SplashScreen /> : <MainApp />;
}

export default Welcome;