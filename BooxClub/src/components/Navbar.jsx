import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";
import ProfileIcon from "./ProfileDropdown";

function Navbar() {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="navbar">
      <div className="mobile-menu" onClick={toggleMenu}>
        <div className={`line ${showMenu ? "open" : ""}`} />
        <div className={`line ${showMenu ? "open" : ""}`} />
        <div className={`line ${showMenu ? "open" : ""}`} />
      </div>
      <div className="logo">
        <Link to="/">
          <img src="" alt="Logo" className="logo-image" />
        </Link>
      </div>
      <nav className={`nav-links ${showMenu ? "show" : ""}`}>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/Products" className="nav-link">
          Products
        </Link>
        <Link to="/Courses" className="nav-link">
          Courses
        </Link>
        <Link to="/Cart" className="nav-link cart">
          <Badge badgeContent={quantity} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </Link>
      </nav>
      {user ? (
        <ProfileIcon />
      ) : (
        <button className="login-button">
          <Link to="/Login">Login</Link>
        </button>
      )}
    </header>
  );
}

export default Navbar;
