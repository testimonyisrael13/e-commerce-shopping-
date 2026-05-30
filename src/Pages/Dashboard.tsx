import { useState, useEffect } from "react";
import "./Dashboard.css";
import { Link, Navigate } from "react-router-dom";

const Admin = () => {
  const role = localStorage.getItem("role");

  if (role !== "admin") {
    return <Navigate to="/" />;
  }

  const [products, setProducts] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  // LOAD DATA
  useEffect(() => {
    const savedProducts = localStorage.getItem("products");

    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }

    const savedOrders = localStorage.getItem("orders");

    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  // IMAGE UPLOAD
  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  // ADD PRODUCT
  const handleAdd = () => {
    if (!name || !price || !category || !image) {
      alert("Please fill all fields");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name,
      price,
      description,
      category,
      image,
    };

    const updatedProducts = [...products, newProduct];

    setProducts(updatedProducts);

    localStorage.setItem(
      "products",
      JSON.stringify(updatedProducts)
    );

    setName("");
    setPrice("");
    setDescription("");
    setCategory("");
    setImage("");
  };

  // DELETE PRODUCT
  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm(
      "Delete this product?"
    );

    if (!confirmDelete) return;

    const updated = products.filter(
      (product) => product.id !== id
    );

    setProducts(updated);

    localStorage.setItem(
      "products",
      JSON.stringify(updated)
    );
  };

  // MARK ORDER SHIPPED
  const markShipped = (id: number) => {
    const updatedOrders = orders.map((order) =>
      order.id === id
        ? { ...order, status: "Shipped" }
        : order
    );

    setOrders(updatedOrders);

    localStorage.setItem(
      "orders",
      JSON.stringify(updatedOrders)
    );
  };

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    window.location.href = "/login";
  };

  return (
    <div className="admin-container">

      {/* SIDEBAR */}
      <div className="sidebar">
        <h2>SHOP-INN</h2>

        <ul>
          <Link to="/dashboard" className="admin-link">
            <li>Dashboard</li>
          </Link>

          <Link to="/product" className="admin-link">
            <li>Products</li>
          </Link>

          <Link to="/" className="admin-link">
            <li>Customer View</li>
          </Link>
        </ul>

        <button
          className="logout-admin"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div className="main-content">

        <div className="admin-header">
          <h1>Admin Dashboard</h1>
        </div>

        {/* ADD PRODUCT */}
        <div className="card">

          <h3>Add Product</h3>

          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) =>
              setPrice(e.target.value)
            }
          />

          {/* CATEGORY */}
          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
          >
            <option value="">
              Select Category
            </option>

            <option value="Necklaces">
              Necklaces
            </option>

            <option value="Shoes">
              Shoes
            </option>

            <option value="Bags">
              Bags
            </option>

            <option value="Heels">
              Heels
            </option>
          </select>

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
          />

          {/* IMAGE UPLOAD */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />

          {/* IMAGE PREVIEW */}
          {image && (
            <img
              src={image}
              alt="preview"
              className="preview-image"
            />
          )}

          <button onClick={handleAdd}>
            Add Product
          </button>
        </div>

        {/* PRODUCTS */}
        <div className="card">

          <h3>Products</h3>

          {products.length === 0 ? (
            <p>No products yet</p>
          ) : (
            products.map((product) => (
              <div
                key={product.id}
                className="product-row"
              >
                <img
                  src={product.image}
                  alt={product.name}
                />

                <div>
                  <h4>{product.name}</h4>

                  <p>₦{product.price}</p>

                  <p>{product.category}</p>
                </div>

                <button
                  className="delete-btn"
                  onClick={() =>
                    handleDelete(product.id)
                  }
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

        {/* ORDERS */}
        <div className="card">

          <h3>Orders</h3>

          {orders.length === 0 ? (
            <p>No orders yet</p>
          ) : (
            orders.map((order) => (
              <div
                key={order.id}
                className="order-row"
              >
                <p>
                  <strong>Status:</strong>{" "}
                  {order.status}
                </p>

                <p>
                  <strong>Total:</strong> ₦
                  {order.total}
                </p>

                <button
                  className="ship-btn"
                  onClick={() =>
                    markShipped(order.id)
                  }
                >
                  Mark as Shipped
                </button>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};

export default Admin;