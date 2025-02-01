import { useState, useEffect } from "react";
import splash from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import "../App.css";



function SplashScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white text-2xl font-semibold">
      <img src={splash} className="w-30" alt="WasteWise" />
      {/* <p className="mt-2 text-lg">Loading...</p> */}
    </div>
  );
}

function MainApp() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
      navigate("/auth");
    };
  const [count, setCount] = useState(0);

  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/bg.png')" }}>
      <div className="absolute bottom-[30%] left-1/2 transform -translate-x-1/2">
        <button className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition" onClick={handleButtonClick}>
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