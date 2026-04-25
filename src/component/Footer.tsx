import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-newsletter">
        <div className="newsletter-content">
          <input type="email" placeholder="Enter Email Address" />
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-brand">
          <h2 className="logo-red">● SHOP-INN</h2>
          <p>High-quality products for all our customers.</p>
        </div>

        <div className="link-column">
          <h3>Category</h3>
          <ul>
            <li>Women</li>
            <li>Men</li>
            <li>Sport</li>
          </ul>
        </div>

        <div className="link-column">
          <h3>Company</h3>
          <ul>
            <li>Home</li>
            <li>About us</li>
          </ul>
        </div>

        <div className="link-column">
          <h3>Contact</h3>
          <ul>
            <li>+2349075162794</li>
            <li>shop-inn@gmail.com</li>
          </ul>
        </div>

        <div className="link-column">
          <h3>Address</h3>
          <p>35 Kareem laka street<br/>Egbeda bus stop, Alimosho<br/>LAGOS, NIGERIA</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Shop-Inn. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;