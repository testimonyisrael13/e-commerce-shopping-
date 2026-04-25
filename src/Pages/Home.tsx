import "./Home.css";
import Hermes from '../assets/Hermes.png'
import chaim from '../assets/chaim.jpg'
import Bootbrown from '../assets/Bootbrown.jpg'
import guessy from '../assets/guessy.jpg'
import chammel from '../assets/chammel.jpg'
import Hero from "../component/Hero";
import Categories from '../component/Categories'
import { Link } from "react-router-dom";
import { CartContext } from "../Pages/CartContext";
import React, { useContext } from "react";

const products = [
  {
    id: 1,
    name: "HERMES KELLY TOP-HANDL LEATHER BAG",
    price: 800,
    image: Hermes,
  },
  {
    id: 2,
    name: "NYX NECKLACE PLATINUM PLATED WOMEN ZICRON",
    price: 700,
    image: chaim,
  },
  {
    id: 3,
    name: "RIVERISLAND BOOTS",
    price: 150,
    image: Bootbrown,
  },
  {
    id: 4,
    name: "GUESS NOELLEE LOGO TOP ZIP SHOULDER BAG",
    price: 2000,
    image: guessy,
  },
  {
    id: 5,
    name: "CHANNEL ",
    price: 1400,
    image: chammel,
  },
];

const Home = () => {
  const cartContext = useContext(CartContext);

if (!cartContext) return null;

const { addToCart } = cartContext;
  return (
    <div className="home">
      <Hero />
      < Categories />
      <Link to ='/product'>
          <button className="productbtn">View all products</button>
          <Link to ='/cart'>
          <button className="productbtn">Cart</button>
          </Link>
      </Link>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={()=> addToCart(product )}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;