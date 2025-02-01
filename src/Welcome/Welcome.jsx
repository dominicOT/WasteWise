import { useState, useEffect } from "react";
import splash from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "./Welcome.css"



function SplashScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-white text-2xl font-semibold">
      <img src={splash} className="w-50" alt="WasteWise" />
      {/* <p className="mt-2 text-lg">Loading...</p> */}
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
        <button className="start-button" onClick={handleButtonClick}>
          Get Started
        </button>
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