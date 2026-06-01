// Navbar.tsx
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { CartContext } from "../Pages/CartContext";
import React, { useContext } from "react";
import sloppyImg from "../assets/sloppy.png";

const Navbar = () => {
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();

  if (!cartContext) return null;

  const { cart } = cartContext;

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    alert("Logged Out Successfully");

    navigate("/login");
  };

  return (
    <nav className="main-nav">
      {/* Banner */}
      <div className="nav-banner">
        <img
          src={sloppyImg}
          alt="Navbar Background"
          className="banner-image"
        />

        <div className="banner-overlay">
          <Link to="/" className="logo-text">
            <h1>SHOP-INN</h1>
            <h4>FASHION JUST IN ONE CLICK......</h4>
          </Link>
        </div>
      </div>
      <div className="nav-actions">
        <Link to="/" className="nav-item">
          Home
        </Link>

        {!token ? (
          <>
            <Link to="/login" className="nav-item">
              Login
            </Link>

            <Link to="/signup" className="nav-item">
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <button
              className="nav-item logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        )}

        <Link to="/cart" className="nav-item cart-link">
          <span className="cart-icon">
            🛒 ({cart.length})
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;