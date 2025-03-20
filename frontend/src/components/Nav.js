import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <h1 className="navbar-brand">GoodGame</h1>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/sign-up" className="nav-link">
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
