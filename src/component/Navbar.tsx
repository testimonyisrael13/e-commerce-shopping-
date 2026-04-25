import { Link } from 'react-router-dom';
import './Navbar.css';
import { CartContext } from '../Pages/CartContext';
import React, {useContext} from 'react';

const Navbar = () => {
  const cartContext = useContext(CartContext);

if (!cartContext) return null;

const { cart } = cartContext;
  return (
    <nav className="main-nav">
      <div className="nav-logo">
        <Link to="/" className="logo-text"></Link>
      </div>

      <div className="nav-search">
        <input type="text" placeholder="Search for products..." />
        <button type="submit">Search</button>
      </div>

      <div className="nav-actions">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/login" className="nav-item">login</Link>
        <Link to="/signup" className="nav-item">Sign Up</Link>
        <Link to="/cart" className="nav-item cart-link"></Link>
          <span className="cart-icon">🛒</span>
          <span className="cart-text">({cart.length})</span>
      </div>
    </nav>
  );
};

export default Navbar;