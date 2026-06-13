import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

import { useTranslation } from "react-i18next";

const NavBar = ({ refs, onScroll }) => {

  const navigate = useNavigate();

  const [language, setLanguage] = useState("en");

  return (

    <>

      {/* 🔵 Top Blue Bar */}

      <div className="top-bar">

        <div className="top-left">
          A Unit of Asian Institute of Gastroenterology
        </div>

        <div className="top-bar-content">

          <Link to="/careers" className="top-link">
            Careers
          </Link>

          <Link to="/research" className="top-link">
            Research
          </Link>

          <Link to="/events" className="top-link">
            Conferences / Events
          </Link>

          <Link to="/awards" className="top-link">
            Awards / Publications
          </Link>

          <Link to="/contact" className="top-link">
            Contact Us
          </Link>

          <Link to="/blog" className="top-link">
            Blogs
          </Link>

          {/* Language Dropdown */}

          <select
            className="language-select"
            value={language}
            onChange={(e) =>
              setLanguage(e.target.value)
            }
          >

            <option value="en">Select Language</option>
            <option value="hi">Hindi</option>
            <option value="te">Telugu</option>
            <option value="ta">Tamil</option>
            <option value="ml">Malayalam</option>

          </select>

        </div>

      </div>


      {/* 🧭 Main Navbar */}

      <nav className="navbar">

        {/* ✅ LOGO SYMBOL (No image needed)

        <div className="logo">

          <Link to="/" className="logo-symbol">

            🏥 HealthCare

          </Link>

        </div> */}


      {/* LEFT — Logo */}
      <div className="logo">

        <Link to="/home">
          <img
            src="/images/logo.png"
            alt="HealthCare Logo"
            className="logo-img"
          />
        </Link>

      </div>


        {/* Navigation */}

        <ul className="nav-links">

          {/* ❌ Removed Home */}

          <li className="dropdown">

            About Us

            <ul className="dropdown-menu">

              <li onClick={() => onScroll("overview")}>
                Overview
              </li>

              <li onClick={() => onScroll("history")}>
                History
              </li>

              <li
                onClick={() =>
                  navigate("/about-us/board")
                }
              >
                Board of Directors
              </li>

            </ul>

          </li>


          <li>

            <Link to="/doctors">
              Find a Doctor
            </Link>

          </li>


          <li>

            <Link to="/health-packages">
              Health Packages
            </Link>

          </li>


          <li>

            <Link to="/book-appointment">
              Book Appointment
            </Link>

          </li>


          <li>

            <Link to="/appointments">
              Appointments
            </Link>

          </li>


          <li>

            <Link to="/register">
              Register
            </Link>

          </li>


          <li>

            <Link to="/registered-users">
              Users
            </Link>

          </li>


          <li>

            <Link to="/login">
              Login
            </Link>

          </li>

        </ul>


        {/* ✅ Right Side Like Screenshot */}

        <div className="emergency-section">

          {/* Search Circle */}

          <div className="search-circle">
            🔍
          </div>

          {/* Red Emergency Box */}

          <div className="emergency-red">

            🚑  
            040 4244 4244

          </div>

          {/* Grey Emergency Box */}

          <div className="emergency-grey">

            ⏰  
            24/7  
            4222

          </div>

        </div>

      </nav>

    </>

  );

};

export default NavBar;