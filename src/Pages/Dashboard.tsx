import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from "../Pages/CartContext";
import './Dashboard.css';

const Dashboard = () => {
  const cartContext = useContext(CartContext);
  
  // Basic safety check for context
  if (!cartContext) return null;
  const { cart, orders } = cartContext; 

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome Back!</h1>
        <p>Manage your account and track your latest purchases.</p>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Active Cart</h3>
          <p>{cart.length} Items</p>
          <Link to="/cart">View Cart</Link>
        </div>
        <div className="stat-card">
          <h3>Total Orders</h3>
          <p>{orders?.length || 0} Orders</p>
          <Link to="/orders">Order History</Link>
        </div>
      </div>

      <div className="action-links">
        <h2>Account Settings</h2>
        <div className="link-grid">
          <Link to="/profile" className="action-btn">Edit Profile</Link>
          <Link to="/addresses" className="action-btn">Shipping Addresses</Link>
          <button className="logout-btn">Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;