import React from "react";
import logo from "../assets/logo.png";

const AuthScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img src={logo} alt="WasteWise" className="w-24 mb-4" />
      <h1 className="text-2xl font-semibold text-green-600 mb-6">welcome</h1>

      <div className="bg-white p-6 rounded-lg shadow-lg w-4/5 max-w-md">
        <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 mb-4">
          create an account
        </button>
        <button className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-lg shadow flex items-center justify-center hover:bg-gray-300">
          <img src="/google-icon.svg" alt="Google" className="w-6 h-6 mr-2" />
          continue with google
        </button>
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <a href="#" className="text-green-600 underline">
            sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default AuthScreen;