import React from "react";
import holding from '../assets/holding.jpg'
import cartyy from '../assets/cartyy.jpg'
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1>SUPER SALE</h1>
        <h3>Up to 75% off</h3>
        <Link to ='/product'>
          <button>Shop Now</button>
        </Link>
      </div>

      <div className="hero-right">
      
        <Link to ='/product'>
           <button>Shop Now</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;