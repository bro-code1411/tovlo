import React from "react";
import logo from "../images/logo-web.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} height="40px" alt="Tovlo" />
          </Link>
          <button
            type="button"
            className="nav-btn"
            onClick={() => setOpen((o) => !o)}
          >
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/trips">Trips</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
