import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/rr.png";
import google from "../assets/google-icon.svg";
import "./Auth.css";

const Auth = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/signin");
  };

  return (
    <div className="auth-container">
      <div className="image-container">
        <img src={logo} alt="WasteWise" className="image" />
      </div>

      <div className="content-container">
        <h1 className="welcome-heading">Welcome</h1>

        <div className="button-group">
          <button className="create-account-button" onClick={handleButtonClick}>
            create an account
          </button>
          <button className="google-signin-button">
            <img src={google} alt="Google" className="google-icon" />
            continue with google
          </button>
          <p className="signin-prompt">
            Already have an account?{" "}
            <Link to={'/sign-in-options'} className="signin-link">
              sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;