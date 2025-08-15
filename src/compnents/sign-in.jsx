import "../styles/signin.css";
import gifImage from "../assets/images/gif.gif";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUser,
  FaUserPlus,
  FaSignInAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const SignIn = () => {
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
          <div className="form-container">
            <h2 className="welcome-text">Nice to see you!</h2>
            <p className="sub-text">Enter your email and password to sign in</p>

            <input type="email" placeholder="Your email address" />
            <input type="password" placeholder="Your password" />

            <div className="remember-me">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>

            <button className="sign-in-btn">SIGN IN</button>

            <p className="signup-text">
              Don’t have an account?
              <span>
                <Link to="/signup">Sign Up</Link>{" "}
              </span>
            </p>
          </div>

          <footer>
            <p>© 2025, Made by Creative Babar Team</p>
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

export default SignIn;
