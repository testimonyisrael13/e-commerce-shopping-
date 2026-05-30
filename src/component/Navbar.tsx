// Navbar.tsx
import { Link } from 'react-router-dom';
import './Navbar.css';
import { CartContext } from '../Pages/CartContext';
import React, { useContext } from 'react';
import sloppyImg from '../assets/sloppy.png'; // Make sure this path points to your assets folder

const Navbar = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) return null;

  const { cart } = cartContext;

  return (
    <nav className="main-nav">
      {/* Hero Banner / Header Wrapper */}
      <div className="nav-banner">
        <img src={sloppyImg} alt="Navbar Background" className="banner-image" />
        <div className="banner-overlay">
          <Link to="/" className="logo-text">
            <h1>SHOP-INN</h1>
              <h4>FASHION JUST IN ONE CLICK......</h4>
          </Link>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="nav-actions">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/login" className="nav-item">Login</Link>
        <Link to="/signup" className="nav-item">Sign Up</Link>
        <Link to="/cart" className="nav-item cart-link">
          <span className="cart-icon">🛒 ({cart.length})</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;