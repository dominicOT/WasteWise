import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import googleIcon from '../assets/google-icon.svg';
import "../Auth/SignIn.css";
import { ArrowLeft } from "lucide-react"
import logo from "../assets/logo.png"
const AgencySignIn = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/auth");
  };
  const handleSignInClick = () => {
    navigate("/home");
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="sign-in-container">
      <div className="sign-in-card">
        {/* Back Arrow */}
        <div className="back-arrow-container">
          <a href="#" className="back-arrow" onClick={handleButtonClick}>
            <ArrowLeft className='arrow-left'/>
          </a>
        </div>

        {/* Title */}
        <h2 className="sign-in-title">
          Sign into your account
        </h2>

        {/* Logo */}
        <div className="logo-container">
          <img src={logo} alt="WasteWise Logo" className="logo" width={200}/>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="sign-in-form">
          <div className="input-group">
            <label htmlFor="email" className="input-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="input-field"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="input-field"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="sign-in-button" onClick={handleSignInClick}>
            Sign In
          </button>
        </form>

      </div>
    </div>
  );
};

export default AgencySignIn;