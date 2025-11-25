import "../styles/signup.css";
import gifImage from "../assets/images/gif3.gif";
import { Link } from "react-router-dom";
import { useState } from "react";

import {
  FaTachometerAlt,
  FaUser,
  FaUserPlus,
  FaSignInAlt,
  FaBars,
  FaTimes,
  FaFacebookF,
  FaApple,
  FaGoogle,
} from "react-icons/fa";

const SignUp = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-content">
          <div className="logo">
            <span>VISION UI FREE</span>
          </div>

          <div className="toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>

          <div className={`nav-links ${isOpen ? "active" : ""}`}>
            <Link to="/" onClick={() => setIsOpen(false)}>
              <FaTachometerAlt /> Dashboard
            </Link>
            <Link to="/profile" onClick={() => setIsOpen(false)}>
              <FaUser /> Profile
            </Link>
            <Link to="/signup" onClick={() => setIsOpen(false)}>
              <FaUserPlus /> Sign Up
            </Link>
            <Link to="/signin" onClick={() => setIsOpen(false)}>
              <FaSignInAlt /> Sign In
            </Link>
          </div>
        </div>
      </nav>
      <div className="login-page">
        <div
          className="login-left"
          style={{ backgroundImage: `url(${gifImage})` }}
        >
          <div className="overlay-text">
            <p className="small-text">INSPIRED BY THE FUTURE:</p>
            <h1 className="main-title">THE VISION UI DASHBOARD</h1>
          </div>
        </div>

        <div className="login-right">
          <div className="register-container">
            <div className="register-card">
              <h1 className="title">Welcome!</h1>
              <p className="subtitle">
                Use these awesome forms to login or create new account in your
                project for free.
              </p>

              <div className="social-buttons">
                <button className="social-btn">
                  <FaFacebookF />
                </button>
                <button className="social-btn">
                  <FaApple />
                </button>
                <button className="social-btn">
                  <FaGoogle />
                </button>
              </div>

              <div className="divider">or</div>

              <form>
                <input type="text" placeholder="Your full name" />
                <input type="email" placeholder="Your email address" />
                <input type="password" placeholder="Your password" />

                <label className="remember-me2">
                  <input type="checkbox" /> Remember me
                </label>

                <button type="submit" className="signup-btn">
                  SIGN UP
                </button>
              </form>

              <p className="signin-link">
                Already have an account?
                <Link to={"/signin"}>Sign in</Link>
              </p>
            </div>
          </div>

          <footer>
            <p> © 2025 create by Komal with creative Babar team</p>
            <div className="footer-links">
              <a href="/">Marketplace</a>
              <a href="/">Blog</a>
              <a href="/">License</a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default SignUp;
