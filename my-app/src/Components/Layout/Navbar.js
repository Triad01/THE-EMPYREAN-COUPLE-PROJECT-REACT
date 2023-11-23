import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Hamburger } from "../../Assets/menu.svg";
import { ReactComponent as Brand } from "../../Assets/Brand/logo.svg";
import "./navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Brand />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">About us</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Premium services</NavLink>
            </li>
            <li>
              <NavLink to="/about">shop </NavLink>
            </li>
            <li>
              <NavLink to="/about">Contact us </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
