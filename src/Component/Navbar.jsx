import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="/Images/apexion_logo.png"
            alt="Logo"
            style={{ height: "50px", width: "auto" }}
          />
        </Link>

        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item me-3">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
