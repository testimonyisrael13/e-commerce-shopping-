import "./Home.css";
import Hermes from "../assets/Hermes.png";
import chaim from "../assets/chaim.jpg";
import Bootbrown from "../assets/Bootbrown.jpg";
import guessy from "../assets/guessy.jpg";
import chammel from "../assets/chammel.jpg";
import vesasan from "../assets/vesasan.jpg";
import Hero from "../component/Hero";
import Categories from "../component/Categories";
import { Link } from "react-router-dom";
import { CartContext } from "../Pages/CartContext";
import React, { useContext, useState, useEffect } from "react";

const products = [
  {
    id: 1,
    name: "HERMES KELLY TOP-HANDLE LEATHER BAG",
    price: 800,
    image: Hermes,
  },
  {
    id: 2,
    name: "NYX NECKLACE PLATINUM PLATED WOMEN ZIRCON",
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
    name: "CHANNEL BAG",
    price: 1400,
    image: chammel,
  },
  {
    id: 6,
    name: "VESASAN GAOHN LEATHER BAG",
    price: 5300,
    image: vesasan,
  },
];

const Home = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) return null;

  const { addToCart } = cartContext;

  // 🔍 SEARCH STATE
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  // 🔁 FILTER LOGIC
  useEffect(() => {
    const result = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredProducts(result);
  }, [search]);

  return (
    <div className="home">
      <Hero />
      <Categories />
      <div className="home-actions">
        <Link to="/product">
          <button className="productbtn">View all products</button>
        </Link>

        <Link to="/cart">
          <button className="productbtn">Cart</button>
        </Link>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="product-grid">
        {filteredProducts.length === 0 ? (
          <p className="no-products">No products found</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>₦{product.price}</p>
              <button onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;