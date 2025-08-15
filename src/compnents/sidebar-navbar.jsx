import "../styles/sidebar.css";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import {
  FaHome,
  FaTable,
  FaFileInvoiceDollar,
  FaUser,
  FaSignInAlt,
  FaUserPlus,
  FaSearch,
  FaBars,
  FaCog,
  FaQuestionCircle,
  FaBell,
  FaSun,
  FaMoon,
} from "react-icons/fa";

import { FiTool } from "react-icons/fi";

const Layout = () => {
  const [lightMode, setLightMode] = useState(false);

  const toggleTheme = () => {
    setLightMode(!lightMode);
    document.body.classList.toggle("light-theme");
  };

  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="layout">
      <div className="top">
        <div className="top-left">
          <span className="text-gray">
            <FaHome className="icon-small" />/ Dashboard
          </span>
          <span className="text-bold">Dashboard</span>
        </div>

        <div className="top-right">
          <div className="search">
            <FaSearch className="icon-search" />
            <input type="text" placeholder="Type here..." />
          </div>

          <div className="signin">
            <Link to={"/signin"}>
              <FaUser /> <span>Sign in</span>
            </Link>
          </div>

          <button className="btn" onClick={toggle}>
            <FaBars />
          </button>

          <button className="btn">
            <FaCog />
          </button>

          <button className="btn">
            <FaBell />
          </button>
          <button className="theme-btn" onClick={toggleTheme}>
            {lightMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            <span>{lightMode ? " " : ""}</span>
          </button>
        </div>
      </div>

      <div className={`side ${open ? "show" : "hide"}`}>
        <h4 className="side-title">VISION UI FREE</h4>

        <ul className="menu">
          <li>
            <NavLink to="/" end>
              <FaHome /> <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/table">
              <FaTable /> <span>Tables</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/billing">
              <FaFileInvoiceDollar /> <span>Billing</span>
            </NavLink>
          </li>
          <li>
            <a href="#rtl">
              <FiTool /> <span>RTL</span>
            </a>
          </li>
        </ul>

        <h5 className="section2">ACCOUNT PAGES</h5>

        <ul className="menu">
          <li>
            <NavLink to="/profile">
              <FaUser /> <span>Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/signin">
              <FaSignInAlt /> <span>Sign In</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup">
              <FaUserPlus /> <span>Sign Up</span>
            </NavLink>
          </li>
          <button className="theme-btn theme-btn2" onClick={toggleTheme}>
            {lightMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            <span>{lightMode ? "Dark mode" : "light mode"}</span>
          </button>
        </ul>

        <div className="help">
          <div className="help-box">
            <span>
              <FaQuestionCircle />
            </span>
            <p>Need help?</p>
            <span>Please check our docs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
