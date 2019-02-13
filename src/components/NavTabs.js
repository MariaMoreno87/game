import React from "react";
import { Link } from "react-router-dom";

const NavTabs = () => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <Link
        to="/game"
        className={
          window.location.pathname === "/game" ? "nav-link active" : "nav-link"
        }
      >
        Home
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/game/about"
        className={
          window.location.pathname === "/game/about" ? "nav-link active" : "nav-link"
        }
      >
        About
      </Link>
    </li>
  </ul>
);

export default NavTabs;
