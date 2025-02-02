import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/rr.png';
import googleIcon from '../assets/google-icon.svg';
import "./SignIn.css"
import { ArrowLeft } from "lucide-react"

const SignIn = () => {
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

        {/* Logo
        <div className="logo-container">
          <img src={logo} alt="WasteWise Logo" className="logo" />
        </div> */}

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

        {/* Divider */}
        <div className="divider-container">
          <div className="divider-line" />
          <div className="divider-text-container">
            <span className="divider-text">
              Or
            </span>
          </div>
        </div>

        {/* Google Sign-In */}
        <div className="signIn-btn">
          <button className="google-sign-in-button">
            <img src={googleIcon} alt="Google Icon" className="google-icon" />
            Sign In with Google
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="sign-up-prompt">
          Do not have an account?{' '}
          <a href="#" className="sign-up-link">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;