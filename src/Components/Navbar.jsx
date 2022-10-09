import React from "react";
import logo from "../assets/images/logo.svg";
function Navbar() {
  return (
    <>
      <a href="/" className="logo">
        <img src={logo} alt="" className="logo-image" />
      </a>
      <nav className="navbar vertical-center line line-vertical">
        <ul>
          <li>
            <a href="/" className="link">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="link">
              Pricing
            </a>
          </li>
          <li>
            <a href="/" className="link">
              Testimonials
            </a>
          </li>
          <li>
            <a href="/" className="link xl-hidden">
              Dashboard
            </a>
          </li>
        </ul>
      </nav>
      <a
        href="/"
        className="link link-dashboard sm-hidden vertical-center line line-vertical"
      >
        Dashboard
      </a>
    </>
  );
}

export default Navbar;
