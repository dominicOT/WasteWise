import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import splash from "./assets/splash.png";
import "./App.css";

function SplashScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-600 text-white text-2xl font-semibold">
      <img src={splash} className="w-20" alt="WasteWise" />
      {/* <p className="mt-2 text-lg">Loading...</p> */}
    </div>
  );
}

function MainApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="flex gap-4">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="w-20" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-20" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold mt-4">Vite + React</h1>
      <div className="card mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <p className="mt-2 text-gray-600">
          Edit <code className="bg-gray-200 p-1 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="mt-6 text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  return showSplash ? <SplashScreen /> : <MainApp />;
}

export default App;
