import React, { useContext } from 'react';
import './ProductPage.css';
import { CartContext } from "../Pages/CartContext";
import Imgguessy from '../assets/guessy.jpg';
import diamond from '../assets/diamond.jpg';
import hilly from '../assets/hilly.jpg';
import white from '../assets/white.jpg';

const ProductPage = () => {
  const cartContext = useContext(CartContext);
  if (!cartContext) return null;
  const { addToCart } = cartContext;

  const products = [
    {
      id: 101,
      name: "GUESS Leather handbag",
      price: 800.00,
      description: "This high-quality leather handbag features a sleek design and spacious interior.",
      image: Imgguessy,
      stock: 10
    },
    {
      id: 102,
      name: "Flora Jewelry Set",
      price: 1500.00,
      description: 'High end bridal jewelry set for women, drop shape necklace and earring set.',
      image: diamond,
      stock: 10,
    },
    {
    id: 103,
    name: "G CREE Heel",
    price: 590.00,
    description: "A classic pointed-toe silver rhinestoes stiletto heel.",
    image: hilly,
    stock: 10,
  },
  {
    id: 104,
    name: "Bvlgari jewelry set",
    price: 630.00,
    description: "A bridal jewelry set, Y-shaped drop and linear drop earring.",
    image: white,
    stock: 10,
  },

  ];

  return (
    <div className="product-page-container">
      {products.map((item) => (
        <div key={item.id} className="product-card-wrapper"> 
          <div className="product-flex">
            <div className="product-image-section">
              <img src={item.image} alt={item.name} />
            </div>
            
            <div className="product-info-section">
              <p className="category-label">Accessories &gt; Bags</p>
              <h1>{item.name}</h1>
              <h2 className="product-price">${item.price}</h2>
              <p className="product-description">{item.description}</p>
              <button 
                className='add-to-cart-btn' 
                onClick={() => addToCart({
                  id: item.id,
                  name: item.name,
                  price: item.price,
                  image: item.image
                })}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;