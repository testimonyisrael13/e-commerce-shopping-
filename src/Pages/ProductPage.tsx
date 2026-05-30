import { useContext, useEffect, useState } from "react";
import "./ProductPage.css";
import { CartContext } from "../Pages/CartContext";

const Product = () => {

  const cartContext = useContext(CartContext);

  if (!cartContext) return null;

  const { addToCart } = cartContext;

  const [products, setProducts] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  // CATEGORY
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  // LOAD PRODUCTS
  useEffect(() => {

    const savedProducts = JSON.parse(
      localStorage.getItem("products") || "[]"
    );

    setProducts(savedProducts);

  }, []);

  // UNIQUE CATEGORIES
  const categories = [
    "All",
    ...new Set(
      products.map((product) => product.category)
    ),
  ];

  // FILTER PRODUCTS
  const filteredProducts = products.filter(
    (product) => {

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "All"
          ? true
          : product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    }
  );

  return (
    <div className="product-page">

      {/* HEADER */}
      <div className="product-header">

        <h1>Shop Products</h1>

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="search-input"
        />

      </div>

      {/* CATEGORIES */}
      <div className="categories-bar">

        {categories.map((category, index) => (

          <button
            key={index}
            className={
              selectedCategory === category
                ? "category-btn active-category"
                : "category-btn"
            }
            onClick={() =>
              setSelectedCategory(category)
            }
          >
            {category}
          </button>

        ))}

      </div>

      {/* PRODUCTS */}
      {filteredProducts.length === 0 ? (

        <p className="empty-products">
          No products found
        </p>

      ) : (

        <div className="products-grid">

          {filteredProducts.map((product) => (

            <div
              key={product.id}
              className="product-card"
            >

              <img
                src={product.image}
                alt={product.name}
              />

              <div className="product-info">

                <span className="product-category">
                  {product.category}
                </span>

                <h3>{product.name}</h3>

                <p className="description">
                  {product.description}
                </p>

                <h2>₦{product.price}</h2>

                <button
                  className="cart-btn"
                  onClick={() =>
                    addToCart(product)
                  }
                >
                  Add To Cart
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default Product;