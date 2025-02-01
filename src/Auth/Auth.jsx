import React from "react";
import logo from "../assets/rr.png";
import google from "../assets/google-icon.svg";
import "./Auth.css";

const Auth = () => {
  return (
    <div className="auth-container">
      <div className="image-container">
        <img src={logo} alt="WasteWise" className="image" />
      </div>

      <div className="content-container">
        <h1 className="welcome-heading">welcome</h1>

        <div className="button-group">
          <button className="create-account-button">
            create an account
          </button>
          <button className="google-signin-button">
            <img src={google} alt="Google" className="google-icon" />
            continue with google
          </button>
          <p className="signin-prompt">
            Already have an account?{" "}
            <a href="#" className="signin-link">
              sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;