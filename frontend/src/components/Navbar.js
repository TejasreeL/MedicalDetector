import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "white" }}
    >
      <Link
        className="navbar-brand fs-2 fst-italic"
        to="/"
        style={{ color: "green" }}
      >
        <i className="fas fa-stethoscope"></i> {/* Font Awesome icon */}
        MediPrev
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/" style={{ color: "green" }}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login" style={{ color: "green" }}>
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/predict" className="nav-link" style={{ color: "green" }}>
              Predict
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ color: "green" }}
            >
              Dropdown link
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
        </ul>
        <Link to="/diabetes" className="btn btn-success ml-auto">
          Diabetes
        </Link>
        <Link to="/heart" className="btn btn-success ml-auto">
          Heart
        </Link>
        <Link to="/parkinsons" className="btn btn-success ml-auto">
          Parkinsons
        </Link>
      </div>
    </nav>
  );
}
