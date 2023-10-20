import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../style/Header.sass";
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo Kasa" />
      </div>

      <nav className="navigation">
        <ul>
          <NavLink
            to="/"
            end
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/about"
            end
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>A propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
